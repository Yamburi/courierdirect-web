import { LANDING } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Landingprops {
  title: string;
  subtitle: string;
}
const ContactBanner: React.FC<Landingprops> = ({ title, subtitle }) => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="relative">
          <div className="w-full h-[300px] rounded-lg bg-black">
            <Image
              className="w-full h-full rounded-lg  object-cover absolute opacity-65 bg-black"
              src={LANDING}
              alt="AboutusLanding"
              unoptimized
            />
          </div>
          <div className="absolute inset-0 flex flex-col gap-3 justify-center items-center">
            <h2 className="text-4xl text-white font-semibold flex justify-center items-center">
              {title}
            </h2>
            <p className="text-white leading-8 w-[70%] text-center text-lg font-thin flex justify-center items-center">
              {subtitle}
            </p>

            <Link href="/contact-us" className="p-2 px-4 text-white rounded-lg border-white border text-xl">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
