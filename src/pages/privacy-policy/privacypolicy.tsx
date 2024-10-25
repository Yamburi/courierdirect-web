import { TContent } from "@/schemas/content.schema";
import React from "react";
interface PrivacyProps {
  privacypolicyList: TContent[];
}
const Privacypolicy: React.FC<PrivacyProps> = ({ privacypolicyList }) => {
  console.log(privacypolicyList);
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className=""
          dangerouslySetInnerHTML={{
            __html: privacypolicyList[0]?.privacy ?? "",
          }}
        />
      </div>
    </div>
  );
};

export default Privacypolicy;
