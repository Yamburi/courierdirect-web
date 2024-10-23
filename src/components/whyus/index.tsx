import React from "react";
import Image from "next/image";
import { TWhyChooseUs } from "@/schemas/whychooseus.schema";
import { WEBSITE_BASE_URL } from "@/lib/config";
import Link from "next/link";

interface WhyChooseUsCardProps {
  data: TWhyChooseUs;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({ data }) => {
  return (
    <div
      
      className="relative w-full h-max  bg-white rounded-2xl shadow-card group "
    >
  

      {/* Card content */}
      <div className=" flex flex-col gap-5 bg-white rounded-2xl p-5 justify-center items-center h-[17rem]">
        <div className="h-[75px] w-[75px] rounded-full flex ">
          <Image
            unoptimized
            width={1000}
            height={1000}
            className=" w-full h-full object-contain"
            src={`${WEBSITE_BASE_URL}/why-us/${data.image}`}
            alt={data.name}
          />
        </div>
       
        <p className="text-base leading-6 font-medium">{data.description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
