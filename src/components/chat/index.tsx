import { errorToast } from "@/lib/toastify";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getChatDetail, insertChat } from "@/redux/thunks/chatThunk";
import {
  chatInsertSchema,
  TChatInsertSchema,
  TChatReplySchema,
} from "@/schemas/chat.schema";
import { parseInputType, validateSchema } from "@/utils/helpers";
import { getUserIdFromLocalStorage } from "@/utils/local";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import UIInput from "../ui/uiinput";
import UIButton from "../ui/uibutton";
import Image from "next/image";
import { FILE } from "@/constants/images";

const Chat = () => {
  const userId = getUserIdFromLocalStorage();
  const dispatch = useAppDispatch();
  const [showHelp, setShowHelp] = useState<boolean>(true);
  const [showChat, setShowChat] = useState<boolean>(false);

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
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
            callback: () => {},
          })
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      errorToast("Something went wrong ");
    }
  };

  const chatData = useAppSelector((state) => state.chatState);

  //   useEffect(() => {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //     userId && showChat && dispatch(getChatDetail({ id: userId }));
  //   }, [dispatch, userId, showChat]);
  console.log(chatData.data, "chat");

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

    // Validate the number of files
    if (existingFilesArray.length + files.length > 5) {
      errorToast("You can upload a maximum of 5 files.");
      return;
    }

    // Validate individual file sizes and total size
    const combinedFiles = existingFilesArray.concat(Array.from(files));

    let totalSize = combinedFiles.reduce((acc, file) => acc + file.size, 0);

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

  return (
    <div className="fixed right-[2%] bottom-[2%] flex gap-4 items-center z-50">
      {showHelp && (
        <div className="relative bg-[#E8ECF2] rounded-[2rem] px-9 py-3 h-fit flex items-center justify-center shadow-card text-sm">
          <i
            className="fa-regular fa-times absolute top-[-10%] left-[-2%] bg-secondary text-white flex justify-center items-center h-[20px] w-[20px] rounded-full text-[10px] cursor-pointer"
            onClick={() => setShowHelp(false)}
          ></i>
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
          userId &&
          (chatData?.data?.length > 0 ? (
            <div className="absolute w-[300px] bottom-[105%] right-0 rounded-xl bg-white shadow-card">
              <div className="bg-secondary text-white text-base leading-6 p-4 flex justify-between items-center rounded-t-xl ">
                <h2>Courier Direct</h2>
                <i
                  className="fa-regular fa-times"
                  onClick={() => setShowChat(false)}
                ></i>
              </div>
              <div className="flex flex-col gap-4 p-4 h-[300px] max-h-[300px] overflow-auto "></div>
              <div className="flex justify-center items-center m-4 rounded-xl shadow-card border-[2px] border-secondary relative">
                <div className="absolute bottom-[115%] left-0 right-0 w-full  overflow-x-auto flex gap-4">
                  {file &&
                    Object.values(file).map((item, index) => (
                      <div
                        className="relative w-20 h-20 border border-gray-300 rounded-md bg-white"
                        key={index}
                      >
                        <i
                          className="fa-regular fa-times absolute top-0 right-0  bg-red-500 text-white w-6 h-6  flex items-center justify-center cursor-pointer"
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
                  className="w-[3rem] h-[3rem] flex justify-center items-center rounded-l-xl text-black text-base fa-solid fa-file-plus cursor-pointer"
                  onClick={handleFileIconClick}
                ></i>
                <input
                  type="file"
                  multiple
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
                <input
                  type="text"
                  placeholder="Send Message"
                  className=" h-[3rem] w-full px-1 outline-none  placeholder-opacity-100"
                  name="replyText"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <i className="bg-secondary flex justify-center items-center w-[4rem] h-[3rem]  rounded-r-xl text-white text-base fa-solid fa-chevron-right"></i>
              </div>
            </div>
          ) : (
            <div className="absolute w-[300px] bottom-[105%] right-0 rounded-b-xl bg-white max-h-[400px] overflow-auto">
              <div className="bg-primary text-white text-base leading-6 p-4">
                Please fill out the form below to start chatting with the next
                available agent.
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
          ))}
      </div>
    </div>
  );
};

export default Chat;
