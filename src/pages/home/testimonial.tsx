import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { WEBSITE_BASE_URL } from "@/lib/config";
import { TTestimonial } from "@/schemas/testimonial.schema";
interface TestimonialProps {
  testimonialList: TTestimonial[];
}
const Testimonial: React.FC<TestimonialProps> = ({ testimonialList }) => {
  return (
    <div className=" flex flex-col justify-center items-center pt-5">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-secondary w-[30rem] max-small:w-full text-3xl left-8 text-center font-semibold">
            Testimonial
          </div>
          <div className="text-base  w-[30rem] max-small:hidden text-center leading-6 ">
            What customers say about{" "}
            <span className="text-secondary font-medium">Courier</span>{" "}
            <span className="text-primary font-medium">Direct</span>
          </div>
        </div>

        <div className="w-full relative mt-10">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={27}
            slidesPerGroup={1}
            slidesPerView={4}
            navigation={{
              nextEl: ".swiper-button-next-custom1",
              prevEl: ".swiper-button-prev-custom1",
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
            autoHeight
            className="w-full h-auto"
            breakpoints={{
              0: { slidesPerView: 1 },
              400: { slidesPerView: 1.5 },
              575: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {testimonialList.map((value) => (
              <SwiperSlide key={value.id} className="h-full w-full pb-10">
                <div key={value.id} className="w-full  h-auto rounded-md  ">
                  <div className="flex flex-col gap-3">
                    <div className=" flex flex-col justify-center gap-2">
                      <div className="h-[280px]">
                        <Image
                          unoptimized
                          width={1000}
                          height={1000}
                          className=" w-full h-full object-cover"
                          src={`${WEBSITE_BASE_URL}/testimonial/${value.image}`}
                          alt={value.name}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-medium text-primary">
                          {value.name}, {value.designation}
                        </h2>
                        <div className="flex gap-1 items-center text-sm text-yellow-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i
                              key={i}
                              className={`${
                                i < Math.floor(value?.rating ?? 5)
                                  ? "fa-solid fa-star"
                                  : "fa-regular fa-star"
                              }`}
                            ></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-6 p-2">{value.message}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <i className="swiper-button-prev-custom1 fa-regular fa-chevron-left rounded-full bg-white border-[1px] border-[#B4BEC8] h-[30px] w-[30px] flex justify-center items-center text-sm text-[#37383a] font-extrabold  cursor-pointer absolute top-[37%] left-[-1%] z-10 shadow-shadow"></i>
          <i className="swiper-button-next-custom1 fa-regular fa-chevron-right rounded-full bg-white border-[1px] border-[#B4BEC8] h-[30px] w-[30px] flex justify-center items-center text-sm text-[#37383a]  font-extrabold  cursor-pointer absolute top-[37%] right-[-1%] z-10 shadow-shadow"></i>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
