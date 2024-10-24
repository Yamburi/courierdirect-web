import { errorToast } from "@/lib/toastify";
import { useAppDispatch } from "@/redux/store";
import { insertChat } from "@/redux/thunks/chatThunk";
import { chatInsertSchema, TChatInsertSchema } from "@/schemas/chat.schema";
import { parseInputType, validateSchema } from "@/utils/helpers";
import { getUserIdFromLocalStorage } from "@/utils/local";
import React, { ChangeEvent, useState } from "react";

const Chat = () => {
  const userId = getUserIdFromLocalStorage();
  const dispatch = useAppDispatch();
  const [showHelp, setShowHelp] = useState<boolean>(true);
  const [showChat, setShowChat] = useState<boolean>(false);

  const [state, setState] = useState<{
    [K in keyof Partial<TChatInsertSchema>]: string;
  }>({});

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
            callback: successFAQInsert,
          })
        );
      }
    } catch (error) {
      errorToast("Something went wrong ");
    }
  };
  const successFAQInsert = () => {
    // setState({
    //   question: "",
    //   answer: "",
    // });
    // setShowWarning(false);
    // setFormKey((prev) => prev + 1);
    // successToast("FAQ Inserted");
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

        {showChat && (
          <div className="absolute w-[300px] bottom-[105%] right-0 rounded-xl ">
            <div className="bg-primary text-white text-base leading-6 p-4">
              Please fill out the form below to start chatting with the next
              available agent.
            </div>
            <div>
              {/* <UIInput
            id="question"
            label="Question"
            isRequired
            placeholder="eg. Economy FAQ"
            name="question"
            onChange={handleInputField}
            value={state.question}
            error={error.question}
          /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
