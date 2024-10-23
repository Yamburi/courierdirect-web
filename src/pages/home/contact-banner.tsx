import UIButton from "@/components/ui/uibutton";
import { frame } from "@/constants/images";
import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <div className=" bg-primary flex justify-center    py-7 relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-0">
        <Image
          src={frame}
          className="w-full h-full object-cover"
          alt="bgimage"
          unoptimized
          height={1000}
          width={1000}
          quality={100}
        />
      </div>
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] z-10">
        <div className=" flex flex-wrap gap-8 py-10  max-[900px]:justify-center justify-between items-center rounded-3xl">
          <div className="flex flex-col gap-4 w-[70%] max-[900px]:w-full max-[900px]:items-center">
            <div className="text-3xl font-bold text-white border-l-4 ">
              <h2 className="pl-3 min-[900px]:w-[600px]">
                Let&apos;s connect and turn your vision into reality.
              </h2>
            </div>
            <p className="text-white text-base leading-6 pl-3">
              We are available from 8:00AM TO 5:00PM, Monday to Friday.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-white">
            <p className="text-lg">REACH OUT NOW !</p>
            <h2 className="text-3xl font-bold">+27 69 631 8051</h2>
            <UIButton
              type="secondary"
              label="Start Conversation"
              href="https://wa.me/+27696318051"
              target="_blank"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
