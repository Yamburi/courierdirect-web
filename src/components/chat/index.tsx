import { errorToast } from "@/lib/toastify";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  getChatDetail,
  getChatNewMessage,
  getChatNewUnseenCount,
  getChatUnseenCount,
  insertChat,
  replyToChat,
} from "@/redux/thunks/chatThunk";
import {
  chatInsertSchema,
  chatReplySchema,
  TChatDetail,
  TChatInsertSchema,
  TChatUnseenCount,
} from "@/schemas/chat.schema";
import {
  generateUniqueUserId,
  parseFormData,
  parseInputType,
  validateSchema,
} from "@/utils/helpers";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import UIInput from "../ui/uiinput";
import UIButton from "../ui/uibutton";
import Image from "next/image";
import { FILE } from "@/constants/images";
import { WEBSITE_BASE_URL } from "@/lib/config";
import Link from "next/link";
import {
  resetChatInsertData,
  updateChatMessage,
  updateChatUnseenCount,
} from "@/redux/slice/chatSlice";
import UILoader from "../ui/uiloader";
import { getUserEmailFromLocalStorage } from "@/utils/local";
import moment from "moment";

const Chat = () => {
  const userId = generateUniqueUserId();
  const userEmail = getUserEmailFromLocalStorage();
  const dispatch = useAppDispatch();
  const [showHelp, setShowHelp] = useState<boolean>(true);
  const [showChat, setShowChat] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const getFetchRef = useRef<AbortController | null>(null);
  const [state, setState] = useState<Partial<TChatInsertSchema>>({
    user_id: userId ?? "",
  });

  const [error, setError] = useState<{
    [K in keyof Partial<TChatInsertSchema>]: string;
  }>({});
  const handleInputField = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const type = e.target.type;
    const required = e.target.required;
    const value = parseInputType(type, e);
    const valid = value !== null && value !== undefined && value !== "";
    setState((prev) => ({ ...prev, [name]: valid ? value : undefined }));
    required &&
      valid &&
      setError((prev) => ({
        ...prev,
        [name]: "",
      }));
  };
  const handleCreateChat = () => {
    try {
      const response = validateSchema(state, chatInsertSchema);
      if (response.errors?.hasError) {
        errorToast("Please Validate indicated fileds");
        setError(response.errors?.error);
        return;
      }
      if (!response.errors?.hasError) {
        dispatch(
          insertChat({
            data: response?.data,
            callback: () => {
              setState({});
              localStorage.setItem(
                "courier-direct-chat-user",
                response?.data?.email
              );
              dispatch(resetChatInsertData());
            },
          })
        );
      }
    } catch (error) {
      errorToast("Something went wrong ");
    }
  };

  const chatData = useAppSelector((state) => state.chatState);

  useEffect(() => {
    if (userEmail && showChat) {
      dispatch(getChatDetail({ id: userEmail }));
      dispatch(updateChatUnseenCount({ count: 0 }));
    }
  }, [dispatch, userEmail, showChat]);

  useEffect(() => {
    let isPolling = true;
    let isRequestInProgress = false;
    let retryAttempts = 0;
    const basePollInterval = 5000;

    const pollNewMessages = async () => {
      if (!isPolling || isRequestInProgress) return;

      isRequestInProgress = true;

      try {
        if (userEmail && showChat && chatData?.data?.length > 0) {
          const response = await dispatch(getChatNewMessage({ id: userEmail }));

          if (
            response.payload &&
            Array.isArray(response.payload) &&
            response.payload.some(
              (newMsg) =>
                !chatData.data.some(
                  (existingMsg) => existingMsg.id === newMsg.id
                )
            )
          ) {
            dispatch(updateChatMessage(response.payload));
            retryAttempts = 0;
          }
        }
      } catch (error) {
        retryAttempts += 1;
      } finally {
        isRequestInProgress = false;

        if (isPolling) {
          const nextPollInterval =
            basePollInterval * Math.min(2 ** retryAttempts, 32);
          setTimeout(pollNewMessages, nextPollInterval);
        }
      }
    };

    pollNewMessages();

    return () => {
      isPolling = false;
    };
  }, [dispatch, userEmail, showChat, chatData?.data]);

  useEffect(() => {
    userEmail && !showChat && dispatch(getChatUnseenCount({ id: userEmail }));
  }, [dispatch, userEmail, showChat]);

  useEffect(() => {
    let isPolling = true;
    let isRequestInProgress = false;
    let retryAttempts = 0;
    const basePollInterval = 5000;

    const pollNewUnseenCount = async () => {
      if (!isPolling || isRequestInProgress) return;

      isRequestInProgress = true;

      try {
        if (userEmail && !showChat) {
          getFetchRef.current?.abort();
          getFetchRef.current = new AbortController();
          const response = await dispatch(
            getChatNewUnseenCount({
              id: userEmail,
              signal: getFetchRef?.current?.signal,
            })
          );
          if (response.payload && (response.payload as TChatUnseenCount)) {
            dispatch(updateChatUnseenCount(response.payload));
            retryAttempts = 0;
          }
        }
      } catch (error) {
        retryAttempts += 1;
      } finally {
        isRequestInProgress = false;

        if (isPolling) {
          const nextPollInterval =
            basePollInterval * Math.min(2 ** retryAttempts, 32);
          setTimeout(pollNewUnseenCount, nextPollInterval);
        }
      }
    };

    pollNewUnseenCount();

    return () => {
      isPolling = false;
    };
  }, [dispatch, userEmail, showChat]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [file, setFile] = useState<FileList | null>(null);
  const [replyText, setReplyText] = useState<string>("");
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length < 1) return;

    const maxTotalSize = 5 * 1024 * 1024; // 5MB total size in bytes
    const maxFileSize = 1 * 1024 * 1024; // 1MB individual file size in bytes
    const existingFilesArray = file ? Array.from(file) : [];

    if (existingFilesArray.length + files.length > 5) {
      errorToast("You can upload a maximum of 5 files.");
      return;
    }

    const combinedFiles = existingFilesArray.concat(Array.from(files));

    const totalSize = combinedFiles.reduce((acc, file) => acc + file.size, 0);

    for (let i = 0; i < combinedFiles.length; i++) {
      if (combinedFiles[i].size > maxFileSize) {
        errorToast(
          `File "${combinedFiles[i].name}" exceeds the maximum size of 1 MB.`
        );
        return;
      }
    }

    if (totalSize > maxTotalSize) {
      errorToast("The total size of all files must not exceed 5 MB.");
      return;
    }

    const dataTransfer = new DataTransfer();
    combinedFiles.forEach((file) => dataTransfer.items.add(file));
    setFile(dataTransfer.files);
  };

  const handleFileDelete = (index: number) => {
    if (!file) return;
    const remainingFiles = Array.from(file).filter((_, i) => i !== index);

    const dataTransfer = new DataTransfer();
    remainingFiles.forEach((file) => dataTransfer.items.add(file));

    setFile(dataTransfer.files);
  };

  const handleReplyChat = () => {
    try {
      const dataToValidate = {
        message: replyText || "",
      };
      const response = validateSchema(dataToValidate, chatReplySchema);
      if (response.errors?.hasError) {
        errorToast("Message is required");
        return;
      }
      if (
        !response.errors?.hasError &&
        userEmail &&
        chatData?.data[0]?.chat_id
      ) {
        const formData = parseFormData(response?.data);
        if (file && file.length > 0) {
          for (let i = 0; i < file.length; i++) {
            formData.append("image", file[i]);
          }
        }
        setIsDisabled(true);
        setTimeout(() => {
          setIsDisabled(false);
        }, 5000);
        dispatch(
          replyToChat({
            data: formData,
            callback: () => {
              setReplyText("");
              setFile(null);
            },
            userId: userEmail,
            chatId: chatData?.data[0]?.chat_id,
          })
        );
      }
    } catch (error) {
      errorToast("Something went wrong ");
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatData?.data]);

  useEffect(() => {
    const originalTitle = document.title;
    let interval: any;

    if (chatData?.unseenCount && chatData?.unseenCount?.count > 0) {
      document.title = `(${chatData?.unseenCount?.count}) New Messages`;
      interval = setInterval(() => {
        document.title =
          document.title === originalTitle
            ? `(${chatData?.unseenCount?.count}) New Messages`
            : originalTitle;
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      document.title = originalTitle;
    };
  }, [chatData.unseenCount]);

  const groupedMessages: Record<string, TChatDetail[]> = chatData?.data
    ?.slice()
    .reverse()
    .reduce((acc, message) => {
      const dateKey = moment(message.created_at).format("MMM Do YYYY");

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(message);
      return acc;
    }, {} as Record<string, TChatDetail[]>);

  return (
    <>
      {chatData?.loading && <UILoader />}
      <div className="fixed right-[2%] bottom-[2%] flex gap-4 items-center z-50">
        {showHelp && (
          <div
            className="relative bg-[#E8ECF2] rounded-[2rem] px-9 py-3 h-fit flex items-center justify-center shadow-card text-sm cursor-pointer"
            onClick={() => {
              setShowHelp(false);
              setShowChat((prev) => !prev);
            }}
          >
            <i className="fa-regular fa-times absolute top-[-10%] left-[-2%] bg-secondary text-white flex justify-center items-center h-[20px] w-[20px] rounded-full text-[10px] cursor-pointer"></i>
            Need any help
          </div>
        )}
        <div className="relative">
          <i
            className={`fa-solid fa-${
              showChat ? "times" : "comment"
            } h-[60px] w-[60px] rounded-full bg-secondary text-white text-2xl flex justify-center items-center shadow-card cursor-pointer`}
            onClick={() => {
              setShowChat((prev) => !prev);
              setShowHelp(false);
            }}
          ></i>

          {showChat &&
            (chatData?.data?.length === 0 ? (
              <div className="absolute w-[300px] bottom-[105%] right-0 rounded-b-xl bg-white max-h-[400px] overflow-auto shadow-card">
                <div className="bg-primary text-white text-base leading-6 p-4">
                  Welcome to Courier Direct Please fill out the form below to
                  start chatting with us.
                </div>
                <div className="flex flex-col gap-4 p-4">
                  <UIInput
                    id="name"
                    label="Name"
                    isRequired
                    placeholder="Name here ..."
                    name="name"
                    onChange={handleInputField}
                    value={state.name}
                    error={error.name}
                  />
                  <UIInput
                    id="email"
                    label="Email"
                    isRequired
                    placeholder="Email here ..."
                    name="email"
                    onChange={handleInputField}
                    value={state.email}
                    error={error.email}
                  />
                  <UIInput
                    id="phone"
                    label="Phone No."
                    type="number"
                    isRequired
                    placeholder="Phone no. here ..."
                    name="phone"
                    onChange={handleInputField}
                    value={state.phone}
                    error={error.phone}
                  />
                  <UIInput
                    id="message"
                    label="Question"
                    isRequired
                    placeholder="Question here ..."
                    name="message"
                    onChange={handleInputField}
                    value={state.message}
                    error={error.message}
                  />
                  <UIButton
                    label={<span>Start Conversation</span>}
                    type="primary"
                    onClick={handleCreateChat}
                  />
                </div>
              </div>
            ) : (
              <div className="absolute w-[300px] bottom-[105%] right-0 rounded-xl bg-white shadow-card">
                <div className="bg-secondary text-white text-base leading-6 p-4 flex justify-between items-center rounded-t-xl ">
                  <h2>Courier Direct</h2>
                  <i
                    className="fa-regular fa-times cursor-pointer"
                    onClick={() => setShowChat(false)}
                  ></i>
                </div>
                <div
                  className="flex flex-col gap-4 p-4 h-[300px] max-h-[300px] overflow-auto"
                  ref={chatRef}
                >
                  {Object.entries(groupedMessages).map(([date, messages]) => (
                    <div key={date}>
                      <div className="text-center text-sm font-medium text-webblack pb-2">
                        {date}
                      </div>
                      <div className="flex flex-col gap-4">
                        {messages?.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${
                              message.user_id ? "justify-start" : "justify-end"
                            }`}
                          >
                            <div className="flex flex-col gap-2">
                              <div
                                className={`p-3 rounded-lg max-w-[250px] ${
                                  message.user_id
                                    ? "bg-primary text-white self-start"
                                    : "bg-gray-100 text-webblack self-end"
                                }`}
                              >
                                <p>{message.message}</p>
                                <small
                                  className={`block mt-1 text-xs  ${
                                    message.user_id
                                      ? "text-white"
                                      : "text-webblack"
                                  }`}
                                >
                                  {new Date(
                                    message.created_at
                                  ).toLocaleTimeString()}
                                </small>
                              </div>
                              {message?.images?.length > 0 && (
                                <div
                                  className={`flex flex-col gap-2 w-[200px] ${
                                    message.user_id ? "" : "items-end"
                                  }`}
                                >
                                  {message.images.map((item, i) => (
                                    <Link
                                      href={`${WEBSITE_BASE_URL}/chat/${item?.image}`}
                                      target="_blank"
                                      key={i}
                                      className={`${
                                        item?.image?.endsWith(".pdf")
                                          ? "h-10"
                                          : "h-20"
                                      } w-fit`}
                                    >
                                      <Image
                                        unoptimized
                                        src={
                                          item?.image.endsWith(".pdf")
                                            ? FILE
                                            : `${WEBSITE_BASE_URL}/chat/${item?.image}`
                                        }
                                        alt={item?.image}
                                        width={1000}
                                        height={1000}
                                        quality={100}
                                        className="object-contain h-full w-full rounded-lg"
                                      />
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center m-4 rounded-xl shadow-card border-[2px] border-secondary relative">
                  <div className="absolute bottom-[115%] left-0 right-0 w-full  overflow-x-auto flex flex-wrap gap-4 bg-white p-2">
                    {file &&
                      Object.values(file).map((item, index) => (
                        <div
                          className="relative w-16 h-16 border border-gray-300 rounded-md bg-white"
                          key={index}
                        >
                          <i
                            className="fa-regular fa-times absolute top-0 right-0  bg-red-500 text-white w-5 h-5 text-xs  flex items-center justify-center cursor-pointer"
                            onClick={() => handleFileDelete(index)}
                          ></i>
                          <Image
                            unoptimized
                            key={index}
                            src={
                              item.type.indexOf("image/") > -1
                                ? URL.createObjectURL(item)
                                : FILE
                            }
                            alt={item.name}
                            width={1000}
                            height={1000}
                            quality={100}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                  </div>

                  <i
                    className="w-[3rem] h-[3rem] flex justify-center items-center rounded-l-xl text-webblack text-base fa-solid fa-file-plus cursor-pointer"
                    onClick={handleFileIconClick}
                  ></i>
                  <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    className="hidden"
                    accept=".jpg,.jpeg,.png, .pdf"
                    onChange={handleFileChange}
                  />
                  <input
                    type="text"
                    placeholder="Send Message"
                    className=" h-[3rem] w-full px-1 outline-none  placeholder-opacity-100 text-webblack"
                    name="replyText"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && !isDisabled && handleReplyChat()
                    }
                  />
                  <i
                    className="bg-secondary flex justify-center items-center w-[4rem] h-[3rem]  rounded-r-xl text-white text-base fa-solid fa-chevron-right"
                    onClick={() => !isDisabled && handleReplyChat()}
                  ></i>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Chat;
