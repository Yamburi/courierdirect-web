import ServiceCard from "@/components/service-card";
import { services } from "@/lib/service";
import { TService } from "@/schemas/service.schema";
import React from "react";
interface ServiceProps {
  serviceList: TService[];
}
const Service: React.FC<ServiceProps> = ({ serviceList }) => {
  return (
    <div className="bg-custom-gradient flex flex-col justify-center items-center py-10">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-white w-[30rem] max-small:w-full text-3xl left-8 text-center font-semibold">
            Boost Your Business with Expert Yamburi Services
          </div>
          <div className="text-base text-white font-medium w-[30rem] max-small:hidden text-center leading-6 ">
            Drive traffic, increase conversions, and grow your online presence
            with our data-driven strategies and innovative solutions.
          </div>
        </div>

        <div className="grid large:grid-cols-4 min-[900px]:grid-cols-3 small:grid-cols-2 max-small:grid-cols-1  gap-7 mt-10">
          {Array.isArray(serviceList) &&
            serviceList?.map((value, i) => (
              <ServiceCard data={value} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
