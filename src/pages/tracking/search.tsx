import { TrackBanner } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Search = () => {
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
            Estimated delivery on: Tuesday, September 3{" "}
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
          <div className="flex flex-col gap-2 flex-1">
           kkk
          </div>
          <div className="border-[#D7C9CE] border-x max-[900px]:hidden"></div>

          <div className="flex flex-col gap-2 flex-1 ">
       
        <div className="relative">
      <div className=" h-[475px] w-[430px]  bg-black">
        <Image
          className="w-full h-full object-cover absolute opacity-65 bg-black"
           src={TrackBanner} alt="TrackBanner"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 flex flex-col gap-3 justify-center items-center">
      hjtgyth
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
