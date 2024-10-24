import React from "react";

const ContactDetail = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-7">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="grid large:grid-cols-3  small:grid-cols-2 max-small:grid-cols-1 gap-7">
          <div className="relative bg-gray-200 rounded-xl  ">
            <div className="flex flex-col gap-1 py-5 pl-9">
              <p>
                71 Landmarks Avenue <br />
                Centurion. Gauteng, South Africa
              </p>
              <div className="font-bold">Visit Us</div>
            </div>
            <div className="absolute -top-7 -left-1">
              <i className="fa-solid fa-location-dot text-5xl text-primary"></i>
            </div>
          </div>

          <div className="relative bg-gray-200 rounded-xl  ">
            <div className="flex flex-col gap-1 py-5 pl-9">
              <p>
              Tel: (012) 657 1985 <br />
              Fax: 086 661 1237
              </p>
              <div className="font-bold">Call Support</div>
            </div>
            <div className="absolute -top-7 -left-3">
              <i className="fa-solid fa-phone text-5xl text-primary"></i>
            </div>
          </div>

          <div className="relative bg-gray-200 rounded-xl flex items-center   ">
            <div className="flex flex-col gap-1 py-5 pl-9">
              <p>
              info@courierdirect.com
              </p>
              <div className="font-bold">E-Mail</div>
            </div>
            <div className="absolute -top-7 -left-3">
              <i className="fa-solid fa-envelope text-5xl text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
