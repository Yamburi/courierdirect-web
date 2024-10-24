import ServiceDetailCard from "@/components/servicedetails";

import { TServiceDetail } from "@/schemas/servicedetail.schema";

import React from "react";
interface ServiceProps {
  serviceDetailList: TServiceDetail[];
}
const ServiceDescription: React.FC<ServiceProps> = ({ serviceDetailList }) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center ">
        <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="text-secondary w-[30rem] max-small:w-full text-3xl left-8 text-center font-semibold">
              Service Details
            </div>
            <div className="text-base  w-[30rem] max-small:hidden text-center leading-6 ">
              Prompt, Reliable, and Secure Deliveries
            </div>
          </div>

          <div className="grid large:grid-cols-2  small:grid-cols-2 max-small:grid-cols-1 gap-7  mt-10">
            {Array.isArray(serviceDetailList) &&
              serviceDetailList?.map((value, i) => (
                <ServiceDetailCard data={value} key={i} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDescription;
