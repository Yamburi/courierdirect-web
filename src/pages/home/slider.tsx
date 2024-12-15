import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import { WEBSITE_BASE_URL } from "@/lib/config";
import { TSlider } from "@/schemas/slider.schema";
import { useRouter } from "next/router";
import { errorToast } from "@/lib/toastify";
import { useAppDispatch } from "@/redux/store";
import { trackQuote } from "@/redux/thunks/trackThunk";
interface SliderProps {
  sliderList: TSlider[];
}
const Slider: React.FC<SliderProps> = ({ sliderList }) => {
  const [trackNo, setTrackNo] = useState<string>("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleTrack = () => {
    try {
      if (!trackNo) {
        errorToast("Tracking No. is required");
        return;
      }
      router.push(`/tracking?trackNo=${trackNo}`);
      const dataToSend = {
        trackNo: trackNo as string,
      };
      dispatch(trackQuote({ data: dataToSend }));
    } catch (error) {
      errorToast("Something went wrong");
    }
  };
  return (
    <div className="w-full relative ">
      <Swiper
        // cssMode
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerGroup={1}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop
        observer
        observeParents
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full  shadow-slider landingSlider"
      >
        {sliderList.map((value) => (
          <SwiperSlide key={value.id} className="h-full w-full">
            <Link href={value.link ?? "#"} className=" h-full w-full">
              <Image
                loading="lazy"
                alt="Large Image"
                width={1000}
                height={1000}
                quality={100}
                unoptimized
                src={`${WEBSITE_BASE_URL}/slider/${value?.image}`}
                className="h-full w-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 right-0 bottom-0 left-0 inset-0 bg-black bg-opacity-35 flex justify-center items-center large:px-0 medium:px-[2.5rem] px-[1.5rem] py-[5rem]">
        <div className="relative gap-3 flex flex-col justify-center items-center  z-10 opacity-100 text-center">
          <h1 className="text-3xl text-white">Track Your Parcel</h1>
          <p className="text-2xl font-thin text-white">
            Seamless Parcel Tracking at Your Fingertips
          </p>
          <div className="flex justify-center items-center pt-4">
            <div className="bg-gray-100 w-[3rem] h-[3rem] flex justify-center items-center rounded-l-xl">
              <i className="text-black text-base fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              placeholder="Enter Tracking Number..."
              className=" h-[3rem] w-[18rem] max-small:w-full px-1 outline-none  placeholder-opacity-100"
              value={trackNo}
              onChange={(e) => setTrackNo(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleTrack()}
            />
            <div
              className="bg-secondary flex justify-center items-center w-[3rem] h-[3rem]  rounded-r-xl"
              onClick={handleTrack}
            >
              <i className="text-white text-base fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
