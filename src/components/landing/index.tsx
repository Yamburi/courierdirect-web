
import { LANDING } from "@/constants/images";
import Image from "next/image";
import React from "react";

interface Landingprops {
  title: string;
  subtitle: string;
}
const LandingPage: React.FC<Landingprops> = ({ title, subtitle }) => {
  return (
    <div className="relative">
      <div className="w-full h-[200px]  bg-black">
        <Image
          className="w-full h-full object-cover absolute opacity-65 bg-black"
          src={LANDING}
          alt="AboutusLanding"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 flex flex-col gap-3 justify-center items-center">
        <h2 className="text-4xl text-white font-semibold flex justify-center items-center">
          {title}
        </h2>
        <p className="text-white leading-8 w-[50%] text-center text-lg font-thin flex justify-center items-center">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
