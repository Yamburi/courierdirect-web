import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import Link from "next/link";
import { TClient } from "@/schemas/client.schema";
import { WEBSITE_BASE_URL } from "@/lib/config";

interface ClientProps {
  clientList: TClient[];
}

const Clients: React.FC<ClientProps> = ({ clientList }) => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="flex justify-between gap-8 w-full max-[1050px]:flex-col">
          <div className="flex flex-col w-[35%] max-[1050px]:w-full gap-4 max-[1050px]:text-center">
            <div className="text-2xl text-primary font-bold">Our Clients</div>
            <h2 className="text-3xl font-bold">
              We Built Best Solutions For Your Company
            </h2>
            <p className="leading-6 text-base font-medium">
              We are dedicated to transforming businesses through cutting-edge
              IT solutions. As a premier technology partner, we specialize in
              harnessing the power of emerging technologies to drive innovation
              and deliver tangible results.
            </p>
          </div>

          <div className="w-[60%] max-[1050px]:w-full">
            <div className="w-full relative">
              <Swiper
                modules={[Navigation, Autoplay, Grid]}
                spaceBetween={0}
                slidesPerGroup={1}
                slidesPerView={3}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                grid={{
                  rows: 2,
                  fill: "row",
                }}
                loop={true}
                className="w-[98%] h-auto"
                breakpoints={{
                  0: { slidesPerView: 2 },
                  450: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1050: { slidesPerView: 3 },
                }}
              >
                {clientList.map((client) => (
                  <SwiperSlide
                    key={client.id}
                    className="h-full w-full border-[1px] border-gray-200"
                  >
                    <Link
                      href={client.link ?? "#"}
                      className="flex items-center justify-center  h-[130px] w-full"
                    >
                      <Image
                        width={150}
                        height={150}
                        className="object-contain w-[84px]"
                        src={`${WEBSITE_BASE_URL}/client/${client.image}`}
                        alt={`client-${client.id}`}
                        unoptimized
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <i className="swiper-button-prev-custom fa-regular fa-chevron-left rounded-full bg-white border-[1px] border-[#B4BEC8] h-[30px] w-[30px] flex justify-center items-center text-sm text-[#37383a] font-extrabold  cursor-pointer absolute top-[45.5%] left-[-1%] z-10 shadow-shadow"></i>
              <i className="swiper-button-next-custom fa-regular fa-chevron-right rounded-full bg-white border-[1px] border-[#B4BEC8] h-[30px] w-[30px] flex justify-center items-center text-sm text-[#37383a]  font-extrabold  cursor-pointer absolute top-[45.5%] right-[-1%] z-10 shadow-shadow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
