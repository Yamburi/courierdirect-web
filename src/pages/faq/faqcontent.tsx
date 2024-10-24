import React, { useState } from "react";

const FaqContent = () => {
  const [index, setIndex] = useState(0);

  const faqArray=[
    {
        'question':"Lorem ipsum dolor sit amet consectetur adipisicing?",
        'answer':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    },
    {
        'question':"Lorem ipsum dolor sit amet consectetur adipisicing?",
        'answer':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    },
    {
        'question':"Lorem ipsum dolor sit amet consectetur adipisicing?",
        'answer':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    },
    {
        'question':"Lorem ipsum dolor sit amet consectetur adipisicing?",
        'answer':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    }
];
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">

      {Array.isArray(faqArray) &&
          faqArray.map((value, i) => (
            <div className="space-y-4" key={i}>
              <div className="flex flex-col  px-7 rounded-md  py-2 mb-1 bg-gray-200 w-full ">
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
                  <div className={`font-medium `}>{value.question}</div>
                </div>
                {index === i && <div className="text-base  pl-9 pb-2 pt-3 ">{value.answer} </div>}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FaqContent;
