import { TContent } from "@/schemas/content.schema";
import React from "react";
interface PrivacyProps {
  tocList: TContent[];
}
const TOC: React.FC<PrivacyProps> = ({ tocList }) => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div
          className="text-base leading-6"
          dangerouslySetInnerHTML={{
            __html: tocList[0]?.toc ?? "",
          }}
        />
      </div>
    </div>
  );
};

export default TOC;
