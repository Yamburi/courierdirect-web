import { LOGO } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-primary ">
        <footer className="w-content large:px-0 medium:px-[2.5rem] px-[1.5rem] max-large:w-full">
          <div className="flex gap-10 justify-between text-white py-7 flex-wrap max-medium:flex-col max-medium:items-center">
            <div className="flex flex-col flex-[1.5] gap-4 max-medium:items-center">
              <div className="w-[270px]">
                <Image
                  src={LOGO}
                  alt="logo"
                  className="w-full object-contain"
                  unoptimized
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="text-base leading-6 max-medium:text-center">
                Welcome to Yamburi, where innovation meets excellence in IT
                solutions. We are a forward-thinking technology company
                dedicated to empowering businesses with cutting-edge digital
                strategies and transformative technologies.
              </div>
            </div>
            <div className="flex-[0.6] flex flex-col w-full  gap-4 max-medium:items-center">
              <div className="text-xl font-semibold whitespace-nowrap "></div>
              <div className="text-base flex flex-col gap-2 whitespace-nowrap max-medium:text-center max-medium:pt-0 pt-8">
                <Link href="/">Home</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/pricing-plans">Pricing Plans</Link>
                <Link href="/teams">Teams</Link>
                <Link href="/projects">Our Projects</Link>
              </div>
            </div>
            <div className="flex-1 flex flex-col w-full gap-4 max-medium:items-center">
              <div className="text-xl font-semibold whitespace-nowrap">
                Customer Care
              </div>
              <div className="text-base flex flex-col gap-2 whitespace-nowrap max-medium:text-center">
                <Link href="/contact-us">Contact Us</Link>
                <Link href="">Privacy Policy</Link>
                <Link href="">Terms and Conditions</Link>
                <Link href="/ticket">Support</Link>
              </div>
            </div>
            <div className="flex-1 flex flex-col w-full gap-4 max-medium:items-center">
              <div className="text-xl font-semibold whitespace-nowrap">
                Connect With Us{" "}
              </div>
              <div className="text-base flex flex-col gap-2 ">
                <div className="flex items-center gap-2 max-medium:justify-center">
                  <i className="fa-regular fa-location-dot"></i>
                  <Link href="#">
                    260 4th Ave, Laudium, Centurion, 0037, South Africa
                  </Link>
                </div>
                <div className="flex items-center gap-2 max-medium:justify-center">
                  <i className="fa-regular fa-phone"></i>
                  <Link href="tel:+27696318051">+27 69 631 8051 </Link>
                </div>
                <div className="flex items-center gap-2 max-medium:justify-center">
                  <i className="fa-regular fa-envelope"></i>
                  <Link href="mailto:info@yamburi.co.za">
                    info@yamburi.co.za
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 max-medium:items-center">
              <div className="text-xl font-semibold whitespace-nowrap">
                Find Us{" "}
              </div>

              <div className="text-base relative flex flex-col gap-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14370.02468684167!2d28.104816!3d-25.78687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957db9d6cc6ddf%3A0x55b47a6e71351e5c!2sYamburi!5e0!3m2!1sen!2snp!4v1729260624543!5m2!1sen!2snp"
                  height="200"
                  className="rounded-xl max-small:w-full"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <div className="absolute top-2 left-2 text-white bg-primary p-1 rounded-md text-xs">
                  View On Map
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-[#222222] flex justify-center items-center py-3">
        <div className=" text-white flex justify-between items-center  large:px-0 medium:px-[2.5rem] px-[1.5rem] w-content max-large:w-full">
          <span>Copyright 2024-Yamburi</span>
          <div className="flex gap-3 justify-end pb-3 max-medium:justify-center">
            <Link
              href="https://www.facebook.com/helloyamburi "
              target="_blank"
              className="bg-white w-7 h-7 flex items-center justify-center rounded-full"
            >
              <i className=" text-primary text-center  fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://www.instagram.com/yamburiza"
              target="_blank"
              className="bg-white w-7 h-7 flex items-center justify-center rounded-full"
            >
              <i className=" text-primary text-center  fa-brands fa-instagram"></i>
            </Link>
            <Link
              href="https://x.com/yamburiza"
              target="_blank"
              className="bg-white w-7 h-7 flex items-center justify-center rounded-full"
            >
              <i className=" text-primary text-center  fa-brands fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
