import React from "react";

const HowWeWorks = () => {
  return (
    <div className=" flex flex-col justify-center items-center py-10 bg-background">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex justify-center  items-center gap-2">
            <hr className="border w-24 border-primary" />
            <div className="font-bold whitespace-nowrap">How We Work</div>
            <hr className="border w-24 border-primary" />
          </div>
          <h2 className="text-3xl font-bold">
            Enjoy seamless service with
            <span className="text-primary"> Our easy steps!</span>
          </h2>
          <p>
            Efficient workflow from requirements gathering to support and
            maintenance
          </p>
        </div>

        <div className="pt-5 flex flex-col gap-2 max-[900px]:gap-6">
          <div className="flex gap-2 max-[900px]:flex-col">
            <div className="w-[40%] max-[900px]:w-full rounded-tl-lg flex bg-[#509CF52B] text-gray-700 py-2 items-center px-5 gap-5">
              <div className="text-4xl font-bold">1</div>
              <div className="border-2 h-8"></div>
              <div className="text-xl font-semibold">Requirement Gathering</div>
            </div>
            <div className="w-[60%] max-[900px]:w-full rounded-tr-lg bg-[#509CF52B] py-2 text-gray-700 px-5 text-base leading-6">
              We start our collaboration by collecting client requirements,
              listing and compiling them.This helps us build the process from
              scratch to deliver results aligned with your goals.
            </div>
          </div>

          <div className="flex gap-2 max-[900px]:flex-col">
            <div className="w-[40%] max-[900px]:w-full flex bg-[#509CF52B] text-gray-700 py-2 items-center px-5 gap-5">
              <div className="text-4xl font-bold">2</div>
              <div className="border-2 h-8"></div>
              <div className="text-xl font-semibold">Plan & Resources</div>
            </div>
            <div className="w-[60%] max-[900px]:w-full bg-[#509CF52B] py-2 text-gray-700 px-5 text-base leading-6">
              After gathering requirements, we devise a strategic path and
              select resources.As the best IT company in Nepal, we offer clients
              a roadmap, laying the groundwork for a successful project.
            </div>
          </div>

          <div className="flex gap-2 max-[900px]:flex-col ">
            <div className="w-[40%] max-[900px]:w-full flex bg-[#509CF52B] text-gray-700 py-2 items-center px-5 gap-5">
              <div className="text-4xl font-bold">3</div>
              <div className="border-2 h-8"></div>
              <div className="text-xl font-semibold">Design & Develop</div>
            </div>
            <div className="w-[60%] max-[900px]:w-full bg-[#509CF52B] py-2 text-gray-700 px-5 text-base leading-6">
              In the design and development phase, we turn strategic ideas into
              digital products thatare visually appealing, technically robust,
              focusing on user experience and functionality.
            </div>
          </div>

          <div className="flex gap-2 max-[900px]:flex-col">
            <div className="w-[40%] max-[900px]:w-full flex bg-[#509CF52B] text-gray-700 py-2 items-center px-5 gap-5">
              <div className="text-4xl font-bold">4</div>
              <div className="border-2 h-8"></div>
              <div className="text-xl font-semibold">Quality Assurance</div>
            </div>
            <div className="w-[60%] max-[900px]:w-full bg-[#509CF52B] py-2 text-gray-700 px-5 text-base leading-6">
              In this phase, we rigorously test and validate to ensure all
              elements work correctly and meet standards, delivering the desired
              user experience. Our team tests each aspect for reliability.
            </div>
          </div>

          <div className="flex gap-2 max-[900px]:flex-col">
            <div className="w-[40%] max-[900px]:w-full flex bg-[#509CF52B] text-gray-700 py-2 items-center px-5 gap-5">
              <div className="text-4xl font-bold">5</div>
              <div className="border-2 h-8"></div>
              <div className="text-xl font-semibold">Deployment</div>
            </div>
            <div className="w-[60%] max-[900px]:w-full bg-[#509CF52B] py-2 text-gray-700 px-5 text-base leading-6">
              Once the product meets standards, we deploy it, releasing product
              or updates on servers. This ensures our products are delivered
              seamlessly and efficiently.
            </div>
          </div>

          <div className="flex gap-2 max-[900px]:flex-col">
            <div className="w-[40%] max-[900px]:w-full flex rounded-bl-lg bg-[#509CF52B] text-gray-700 py-2 items-center px-5 gap-5">
              <div className="text-4xl font-bold">6</div>
              <div className="border-2 h-8"></div>
              <div className="text-xl font-semibold">Support & Maintenance</div>
            </div>
            <div className="w-[60%] max-[900px]:w-full rounded-br-lg bg-[#509CF52B] py-2 text-gray-700 px-5 text-base leading-6">
              In the final stage, we maintain systems to ensure smooth
              operation, security, and reliability. Optimization keeps
              performance high and client satisfaction focused on operational
              excellence.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorks;
