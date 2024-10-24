import UIButton from "@/components/ui/uibutton";
import UIInput from "@/components/ui/uiinput";
import dynamic from "next/dynamic";
import React from "react";
const UITextEditor = dynamic(() => import("@/components/ui/uieditor/index"), {
  ssr: false,
});
const GetInTouch = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="flex justify-between gap-10 max-[900px]:flex-col">
          <div className="flex flex-col gap-2 flex-1">
            <div className="text-secondary  text-3xl left-8 text-center font-semibold">
              Get in Touch
            </div>
            <div className="text-base   text-center leading-6 pb-5">
              We&apos;re here to help. Chat with our team 24/7
            </div>
            <div className=" flex flex-col gap-4 ">
              <UIInput label="Full Name" name="name" isRequired />
              <UIInput label="Email" name="email" isRequired />

              <UIInput label="Phone No." name="phone" />
              <UIInput label="Subject" name="subject" isRequired />
              <UITextEditor
                id="message"
                name="message"
                label="Message"
                isRequired
                rows={3}
              />

              <UIButton label="Send Message" type="primary" />
            </div>
          </div>
          <div className="border-[#D7C9CE] border-x max-[900px]:hidden"></div>

          <div className="flex flex-col gap-2 flex-1 ">
            <div className="text-secondary  text-3xl left-8 text-center font-semibold">
              Navigate Us
            </div>
            <div className="text-base   text-center leading-6 pb-5">
              Navigate to us with the use of map
            </div>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.097719058462!2d28.142013000000002!3d-25.932015999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956f917b113747%3A0x73e38d52803f91bc!2sCOURIER%20DIRECT!5e0!3m2!1sen!2snp!4v1729789087312!5m2!1sen!2snp"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
