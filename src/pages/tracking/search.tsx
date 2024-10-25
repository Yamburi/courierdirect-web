import ServiceDetailCard from "@/components/servicedetails";
import { TrackBanner } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Search = () => {
  const trackList = [
    {
      icon: "truck-fast",
      name: "August 24, 2024 11:23 PM ",
      description: "Item Dispatched for delivery",
    },
    {
      icon: "warehouse",
      name: "August 24, 2024 11:23 PM ",
      description: "Item arrived at our warehouse",
    },
    {
      icon: "truck-pickup",
      name: "August 24, 2024 11:23 PM ",
      description:
        "Item Dispatched for deliveryItem picked and dispatched to warehouse",
    },
    {
      icon: "spinner",
      name: "August 24, 2024 11:23 PM ",
      description: "Item processed with item details and user details",
    },
  ];
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="flex   justify-center items-center ">
          <div className="border h-[2.5rem] shadow-lg rounded-xl bg-slate-50 flex w-[50%]">
            <div className=" w-[10%]  flex justify-center items-center ">
              <i className="text-black text-base fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              placeholder="Enter Tracking Number..."
              className="  w-[70%] bg-slate-50 max-small:w-full px-1 outline-none placeholder-opacity-100"
            />
            <div className="bg-primary shadow-lg rounded-r-xl text-white flex justify-center items-center w-[20%]   ">
              Track
            </div>
          </div>
        </div>

        {/*  */}

        <div className="flex flex-col mt-10">
          <div className="text-primary font-semibold pb-5">#135A6C</div>
          <div className="text-secondary pb-2">Dispatched for delivery</div>
          <div className="font-medium">
            Estimated delivery on: Tuesday, September 3
          </div>
          <div className="grid-cols-4 grid py-10 gap-5">
            <div className="flex flex-col gap-2">
              <hr className="h-[9px] bg-primary  rounded-md" />
              <p className="text-sm">Processing</p>
            </div>
            <div className="flex flex-col gap-2">
              <hr className="h-[9px] bg-primary  rounded-md" />
              <p className="text-sm">Picked</p>
            </div>
            <div className="flex flex-col gap-2">
              <hr className="h-[9px] bg-primary  rounded-md" />
              <p className="text-sm">In warehouse</p>
            </div>
            <div className="flex flex-col gap-2">
              <hr className="h-[9px] bg-primary  rounded-md" />
              <p className="text-sm">Delivery</p>
            </div>
          </div>

          <div className="flex justify-between gap-10 max-[900px]:flex-col">
            <div className="flex flex-1 gap-2 ">
              <div className="flex flex-col gap-2 w-full ">
                <div className="py-3 px-3 bg-[#F3E8E8] rounded-xl shadow-lg  flex gap-5 items-center">
                  <i className="fa-solid fa-chevron-down"></i>
                  <div className="">Shipment summary</div>
                </div>
                
                  <div className="flex flex-col gap-2">
                    {Array.isArray(trackList) &&
                      trackList?.map((value, i) => (
                        <ServiceDetailCard data={value} key={i} />
                      ))}
                  </div>
              

                <div className="mt-10">
                  <div className="font-medium">Need help with delivery?</div>
                  <div className="bg-white mt-5 md:w-[80%] w-full flex  justify-between rounded-md shadow-card   group text-webblack">
                    <div className=" flex  gap-5  p-5 ">
                      <i
                        className={`fa-solid fa-phone text-xl text-primary`}
                      ></i>

                      <div className="flex flex-col space-y-1">
                        <h2 className="text-lg text-primary font-medium">
                          Call us
                        </h2>
                        <p className="text-base  leading-6 font-normal ">
                        (012) 657 1985
                        </p>
                      </div>
                    </div>
                    <div className=" flex  gap-5  p-5 ">
                      <i
                        className={`fa-solid fa-envelope text-xl text-primary`}
                      ></i>

                      <div className="flex flex-col space-y-1">
                        <h2 className="text-lg text-primary font-medium">
                          Mail us
                        </h2>
                        <p className="text-base  leading-6 font-normal ">
                          info@courierdirect.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-[#D7C9CE] border-x max-[900px]:hidden"></div>

            <div className="flex flex-col md:justify-center md:items-center gap-2 flex-1 ">
              <div className="relative">
                <div className=" h-[475px] rounded-2xl  md:w-[430px]    bg-black">
                  <Image
                    className="md:w-[430px] rounded-2xl  h-full object-cover absolute opacity-65 bg-black"
                    src={TrackBanner}
                    alt="TrackBanner"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 text-white flex flex-col gap-3 justify-center items-center">
                  <div className="text-2xl font-medium">Ad Banner</div>
                  <p className="text-sm p-5 text-center">
                    Lorem ipsum dolor sit amet consectetur. Morbi sem urna
                    egestas vitae semper nullam dui mauris egestas. Sed quis
                    neque quisque feugiat mi vestibulum posuere accumsan
                    viverra. Congue elementum ante eget sit. Porta orci aenean
                    sit dignissim. Vestibulum tellus elit elementum duis a
                    vitae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
