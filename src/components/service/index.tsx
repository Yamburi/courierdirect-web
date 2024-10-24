import React from "react";
import Image from "next/image";

import { WEBSITE_BASE_URL } from "@/lib/config";
import { TService } from "@/schemas/service.schema";

interface ServiceCardProps {
  data: TService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  return (
    <div className="relative w-full h-max   group text-webblack">
      {/* Card content */}
      <div className=" flex flex-col gap-5  p-5 justify-center items-center ">
        <div className="h-[75px] w-[75px] rounded-full flex ">
          <Image
            unoptimized
            width={1000}
            height={1000}
            className=" w-full h-full object-contain"
            src={`${WEBSITE_BASE_URL}/service/${data.image}`}
            alt={data.name}
          />
        </div>

        <h2 className="text-lg text-primary font-medium">{data.name}</h2>
        <p className="text-base  leading-6 font-normal text-center">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
