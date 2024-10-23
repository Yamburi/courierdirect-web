import UIButton from "@/components/ui/uibutton";
import { frame } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Customquote = () => {
  return (
    <div className=" flex bg-white flex-col justify-center items-center py-10 ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem]">
        <div className="bg-primary flex py-10 px-14 max-small:px-10 max-small:justify-center justify-between flex-wrap gap-4 items-center rounded-3xl relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 -z-0 rounded-3xl">
            <Image
              src={frame}
              className="w-full h-full object-cover rounded-3xl"
              alt="bgimage"
              unoptimized
              height={1000}
              width={1000}
              quality={100}
            />
          </div>
          <div className="z-10 flex flex-col gap-4 w-[70%] max-medium:w-full max-small:text-center">
            <h2 className="text-3xl font-bold text-white">Custom Quote</h2>
            <p className="text-white text-base leading-6">
              This is where you can build your own quote without the hassle of
              getting in contact with us directly. Please go through all the
              relevant fields below.
            </p>
          </div>
          <div className="z-10">
            <UIButton
              label="Build a Quote"
              href="/quote"
              type="secondary"
              // className="w-[11rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customquote;
