import React from "react";

const GetInTouch = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 ">
            <div className="text-secondary w-[30rem] max-small:w-full text-3xl left-8 text-center font-semibold">
              Get in touch
            </div>
            <div className="text-base  w-[30rem] max-small:hidden text-center leading-6 pb-5">
              We&apos;re here to help <br />
              Chat with our team 24/7
            </div>
            <form action="" className="w-[90%]">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="text-sm font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  className=" rounded-md border outline-none bg-gray-200 border-gray-300 px-2 py-2"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <label htmlFor="" className="text-sm font-bold">
                  Email
                </label>
                <input
                  type="email"
                  className=" rounded-md border outline-none bg-gray-200 border-gray-300 px-2 py-2"
                  placeholder="E-Mail"
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <label htmlFor="" className="text-sm font-bold">
                  Subject
                </label>
                <input
                  type="text"
                  className=" rounded-md border outline-none bg-gray-200 border-gray-300 px-2 py-2"
                  placeholder="Subject"
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <label htmlFor="" className="text-sm font-bold">
                  Message
                </label>
                <textarea
                  name=""
                  className="h-20 rounded-md border outline-none bg-gray-200 border-gray-300 px-2 py-2"
                  placeholder="Enter your message"
                  id=""
                ></textarea>
              </div>
              <button className="rounded-md text-white bg-primary py-2 mt-5 w-full">
                Send Message
              </button>
            </form>
          </div>
          <div className="border-[#D7C9CE] border-x"></div>

          <div className="flex flex-col gap-2  ">
            <div className="text-secondary w-[30rem] max-small:w-full text-3xl left-8 text-center font-semibold">
              Navigate us
            </div>
            <div className="text-base  w-[30rem] max-small:hidden text-center leading-6 pb-5">
              Navigate to us <br />
              with the use of map
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.097719058462!2d28.142013000000002!3d-25.932015999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956f917b113747%3A0x73e38d52803f91bc!2sCOURIER%20DIRECT!5e0!3m2!1sen!2snp!4v1729789087312!5m2!1sen!2snp"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
