
import WhyChooseUsCard from "@/components/whyus";
import { TWhyChooseUs } from "@/schemas/whychooseus.schema";
import React from "react";
interface WhyChooseUsProps {
  whychooseusList: TWhyChooseUs[];
}
const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ whychooseusList }) => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-secondary w-[30rem] max-small:w-full text-3xl left-8 text-center font-semibold">
          Why Choose Courier Direct?
          </div>
          <div className="text-base text-gray-500 font-medium w-[30rem] max-small:hidden text-center leading-6 ">
          We offer an extensive range of services.
          </div>
        </div>

        <div className="grid large:grid-cols-3 min-[900px]:grid-cols-3 small:grid-cols-2 max-small:grid-cols-1  gap-7 mt-10">
          {Array.isArray(whychooseusList) &&
            whychooseusList?.map((value, i) => (
              <WhyChooseUsCard data={value} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
