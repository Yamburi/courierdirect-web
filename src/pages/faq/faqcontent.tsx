import { TFaq } from "@/schemas/faq.schema";
import React, { useState } from "react";
interface FaqProps {
  faqList: TFaq[];
}
const FaqContent:React.FC<FaqProps> = ({ faqList })  => {
  const [index, setIndex] = useState(0);

 
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        {Array.isArray(faqList) &&
          faqList.map((value, i) => (
            <div className="space-y-4" key={i}>
              <div className={`flex flex-col  px-7 rounded-md  py-2 mb-1 bg-gray-200 ${
                      index === i ? "bg-blue-50" : ""
                    } w-full `}>
                <div className="flex gap-5  ">
                  <div
                    onClick={() =>
                      setIndex((prevIndex) => (prevIndex === i ? -1 : i))
                    }
                    className=" "
                  >
                    {index === i ? (
                      <i className="fa-solid fa-chevron-up text-primary cursor-pointer"></i>
                    ) : (
                      <div>
                        <i className="fa-solid fa-chevron-down   cursor-pointer"></i>
                      </div>
                    )}
                  </div>
                  <div
                    className={`font-medium ${
                      index === i ? "text-primary" : ""
                    }`}
                  >
                    {value.question}
                  </div>
                </div>
                {index === i && (
                  <div className="text-base  pl-9 pb-2 pt-3 ">
                    <div
                dangerouslySetInnerHTML={{
                  __html: value.answer ?? "",
                }}
              />
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FaqContent;
