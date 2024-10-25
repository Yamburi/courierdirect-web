import { WHITELOGO } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-primary  ">
        <footer className="w-content large:px-0 medium:px-[2.5rem] px-[1.5rem] max-large:w-full py-5">
          <div className="flex gap-10 justify-between text-[#DDE3EB] py-7 flex-wrap max-medium:flex-col max-medium:items-center">
            <div className="flex flex-col flex-[1] gap-4 max-medium:items-center justify-center">
              <div className="w-[190px]">
                <Image
                  src={WHITELOGO}
                  alt="logo"
                  className="w-full object-contain"
                  unoptimized
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="text-base leading-6 max-medium:text-center space-y-2">
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-phone"></i>
                  <Link href="tel:+27696318051">(012) 657 1985 </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fa-regular fa-envelope"></i>
                  <Link href="mailto:info@courierdirect.com">
                    info@courierdirect.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col w-full gap-4 max-medium:items-center">
              <div className="text-xl font-semibold whitespace-nowrap">
                Quick Links
              </div>
              <div className="text-base flex flex-col gap-2 whitespace-nowrap max-medium:text-center">
                <Link href="/Home">Home</Link>
                <Link href="/service">Services</Link>
                <Link href="/faq">FAQs</Link>
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/terms-conditions">Terms and Conditions</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
            <div className="flex-1 flex flex-col w-full gap-4 max-medium:items-center">
              <div className="text-xl font-semibold whitespace-nowrap">
                Contact Details
              </div>
              <div className="text-base flex flex-col gap-2 max-medium:text-center">
                <div>
                  Address: <br />
                  71 Landmark Avenue, Centurion.Gauteng, South Africa
                </div>

                <div>
                  Postal Address: <br />
                  P.O. Box 3768, The Reeds, 0158
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 max-medium:items-center">
              <div className="text-xl font-semibold whitespace-nowrap">
                Find Us
              </div>
              <div className="text-base relative flex flex-col gap-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.0978666605474!2d28.139438074392885!3d-25.93201115294199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956f917b113747%3A0x73e38d52803f91bc!2sCOURIER%20DIRECT!5e0!3m2!1sen!2snp!4v1729861365213!5m2!1sen!2snp"
                  height="150"
                  className="rounded-xl max-small:w-full"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <div className="absolute top-2 left-2 text-[#DDE3EB] bg-primary p-1 rounded-md text-xs">
                  View On Map
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-primary flex justify-center items-center py-3 text-[#DDE3EB] border-t text-center">
        <span>Copyright @2016 Courier Direct | All Rights Reserved</span>
      </div>
    </>
  );
};

export default Footer;
