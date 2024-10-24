import React from "react";
import Image from "next/image";

import { WEBSITE_BASE_URL } from "@/lib/config";
import { TServiceDetail } from "@/schemas/servicedetail.schema";

interface ServiceDetailCardProps {
  data: TServiceDetail;
}

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-md shadow-card w-full h-max   group text-webblack">
      {/* Card content */}
      <div className=" flex  gap-5  p-5  ">
        
          <i className={`fa-regular fa-${data.icon} text-3xl text-primary`}></i>
        

        <div className="flex flex-col">
          <h2 className="text-lg text-primary font-medium">{data.name}</h2>
          <p className="text-base  leading-6 font-normal ">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCard;