import { ABOUTUS, AIM } from "@/constants/images";
import { TContent } from "@/schemas/content.schema";
import Image from "next/image";
import React from "react";
interface aimProps {
  aboutContent: TContent[];
}
const AboutUs: React.FC<aimProps> = ({aboutContent}) => {
  return (
    <div className="flex flex-col  justify-center items-center  ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] ">
        <div className="flex gap-7 px-14 py-2 max-small:p-4 text-webblack bg-white justify-center items-center max-[900px]:flex-col shadow-slider rounded-xl">
        
          <div className="h-[400px] max-small:h-[300px]">
            <Image
              src={ABOUTUS}
              className="w-full h-full object-contain"
              alt="bgimage"
              unoptimized
              height={1000}
              width={1000}
              quality={100}
            />
          </div>

          <div className="flex flex-col flex-1 gap-4 pt-10 max-small:pt-5">
            <h2 className="text-4xl text-secondary font-bold max-small:text-center max-small:text-3xl">
             About Us
            </h2>
            <p>Learn more about <span className="text-secondary">Courier</span>  <span className="text-primary"> Direct</span></p>
            <div className="leading-8 text-base font-medium">
            <div dangerouslySetInnerHTML={{__html:aboutContent[0].about ??""} }/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
