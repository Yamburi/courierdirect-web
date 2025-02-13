import ServiceCard from "@/components/service";
import { TService } from "@/schemas/service.schema";

import React from "react";
interface ServiceProps {
  serviceList: TService[];
}
const DomesticService: React.FC<ServiceProps> = ({ serviceList }) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center ">
        <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="text-secondary w-[30rem] max-small:w-full text-3xl left-8 text-center font-semibold">
              Our Domestic Services
            </div>
            <div className="text-base  w-[30rem] max-small:hidden text-center leading-6 ">
              We offer an extensive range of services.
            </div>
          </div>

          <div className="grid large:grid-cols-2  small:grid-cols-2 max-small:grid-cols-1   gap-20 max-small:gap-4 max-medium:gap-8 mt-10">
            {Array.isArray(serviceList) &&
              serviceList?.map((value, i) => (
                <ServiceCard data={value} key={i} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DomesticService;
