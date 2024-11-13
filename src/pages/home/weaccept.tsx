import { MASTERCARD, SNAPSCAN, VISA, ZAPPER } from "@/constants/images";
import Image from "next/image";
import React from "react";

const WeAccept = () => {
  const payList = [
    {
      image: VISA,
    },
    {
      image: MASTERCARD,
    },
    {
      image: ZAPPER,
    },
    {
      image: SNAPSCAN,
    },
  ];
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-secondary w-[30rem] max-small:w-full text-3xl left-8 text-center font-semibold">
            We Accept
          </div>
          <div className="text-base  w-[30rem] max-small:hidden text-center leading-6 ">
            We accept payment across various payment partners
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly   gap-10 mt-10">
          {Array.isArray(payList) &&
            payList?.map((value, i) => (
              <Image
                width={1000}
                height={1000}
                src={value.image}
                alt="we-accept"
                className="h-[80px] w-[280px] first:py-2  object-contain "
                key={i}
                unoptimized
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WeAccept;
