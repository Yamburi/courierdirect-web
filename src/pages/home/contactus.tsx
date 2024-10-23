import React from "react";

import ContactComponent from "@/components/contact";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-white">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="flex gap-8 w-full max-medium:flex-col">
          <div className="flex flex-col w-[45%] max-medium:w-full gap-4 max-medium:text-center">
            <div className="text-2xl text-primary font-bold">Contact Us</div>
            <h2 className="text-3xl font-bold">
              Ready to Enhance Your Online Presence?{" "}
            </h2>
            <p className="leading-6 text-base font-medium">
              Let&apos;s Discuss Tailored Solutions for Your Business Schedule
              Your Free Consultation Today
            </p>
          </div>

          <div className="flex justify-end flex-1">
            <div className="w-[80%] max-medium:w-full">
              <ContactComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
