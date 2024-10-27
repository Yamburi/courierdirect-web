import { CYCLE, LOC, NODATA, TrackBanner } from "@/constants/images";
import { errorToast } from "@/lib/toastify";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { trackQuote } from "@/redux/thunks/trackThunk";
import { useRouter } from "next/router";
import UILoader from "@/components/ui/uiloader";
import Link from "next/link";

const Search = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { trackNo } = router.query;

  const handleTrack = async () => {
    try {
      if (!trackNo) {
        errorToast("Tracking No. is required");
        return;
      }
      const dataToSend = {
        trackNo: trackNo as string,
      };
      dispatch(trackQuote({ data: dataToSend }));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      errorToast("Something went wrong ");
    }
  };

  const trackData = useAppSelector((state) => state.trackState);
  const trackingRecords = trackData?.data?.records || [];

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case "CREATED":
        return "fa-file-alt";
      case "INBOUND":
        return "fa-arrow-down";
      case "OUTBOUND":
        return "fa-arrow-up";
      case "COMPLETED":
        return "fa-check-circle";
      default:
        return "fa-info-circle";
    }
  };
  const eventSteps = [
    { label: "Order Created", type: "CREATED" },
    { label: "Package Picked Up", type: "INBOUND" },
    { label: "In Transit", type: "OUTBOUND" },
    { label: "Out for Delivery", type: "COMPLETED" },
  ];

  return (
    <>
      {trackData?.loading && <UILoader />}
      <div className=" flex flex-col justify-center items-center ">
        <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
          <div className="flex   justify-center items-center min-h-[200px] ">
            <div className="border h-[3.5rem] shadow-lg rounded-xl bg-slate-50 flex w-[60%] max-medium:w-full relative">
              <div className="absolute top-[-10%] large:left-[-15%] medium:left-[-25%] max-medium:top-[-180%] h-24 w-24 z-10">
                <Image
                  src={LOC}
                  className="w-full h-full object-contain"
                  alt="bgimage"
                  unoptimized
                  height={1000}
                  width={1000}
                  quality={100}
                />
              </div>
              <div className="absolute bottom-[-80%] large:right-[-20%] medium:right-[-35%] max-medium:hidden h-36 w-36 z-10">
                <Image
                  src={CYCLE}
                  className="w-full h-full object-contain"
                  alt="bgimage"
                  unoptimized
                  height={1000}
                  width={1000}
                  quality={100}
                />
              </div>
              <div className=" w-[3rem]  flex justify-center items-center ">
                <i className="text-black text-base fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                type="text"
                placeholder="Enter Tracking Number..."
                className="  w-full bg-slate-50 max-small:w-full px-1 outline-none placeholder-opacity-100"
                value={trackNo}
                onChange={(e) =>
                  router.push(`/tracking?trackNo=${e.target.value}`)
                }
                onKeyPress={(e) => e.key === "Enter" && handleTrack()}
              />
              <div
                className="bg-primary shadow-lg rounded-r-xl text-white flex justify-center items-center w-[8rem]"
                onClick={handleTrack}
              >
                Track
              </div>
            </div>
          </div>

          {Array.isArray(trackingRecords) && trackingRecords?.length > 0 ? (
            <div className="flex flex-col gap-5">
              <div className="text-primary font-semibold">#{trackNo}</div>
              {/* <div className="text-secondary pb-2">Dispatched for delivery</div>
            <div className="font-medium">
              Estimated delivery on: Tuesday, September 3
            </div> */}
              <div className="grid grid-cols-4  max-medium:grid-cols-2 gap-5">
                {eventSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 whitespace-nowrap"
                  >
                    <hr
                      className={`h-[9px] rounded-md ${
                        trackingRecords.some(
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          (record: any) => record.event_type === step.type
                        )
                          ? "bg-green-500"
                          : "bg-primary"
                      }`}
                    />
                    <p className="text-sm">{step.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between gap-10 max-[900px]:flex-col">
                <div className="flex flex-1 gap-2 ">
                  <div className="flex flex-col gap-4 w-full ">
                    <div className="py-3 px-3 bg-[#F3E8E8] rounded-xl shadow-lg  flex gap-5 items-center">
                      <i className="fa-solid fa-chevron-down"></i>
                      <div className="text-lg font-semibold">
                        Shipment summary
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 ">
                      {Array.isArray(trackingRecords) &&
                        trackingRecords.map((record, i) => (
                          <div
                            className="flex items-center gap-4 p-4 border rounded-lg shadow-card bg-white"
                            key={i}
                          >
                            <div className="flex items-center justify-center w-10 h-10  rounded-full">
                              <i
                                className={`fa ${getEventIcon(
                                  record.event_type
                                )} text-2xl text-primary`}
                              ></i>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-lg font-semibold text-primary">
                                {record.event_name} - {record.branch_code}
                              </span>
                              <span className="text-sm text-gray-500">
                                Date: {record.event_date} | Time:{" "}
                                {record.event_time} (UTC{record.utc_time_zone})
                              </span>
                              <span className="text-sm text-gray-500">
                                Event Type: {record.event_type}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className="mt-5">
                      <div className="font-medium">
                        Need help with delivery?
                      </div>
                      <div className="bg-white mt-5 md:w-[80%] w-full flex  justify-between rounded-md shadow-card   group text-webblack flex-wrap p-5 gap-4">
                        <div className=" flex  gap-5 ">
                          <i
                            className={`fa-solid fa-phone text-xl text-primary`}
                          ></i>

                          <div className="flex flex-col space-y-1">
                            <h2 className="text-lg text-primary font-medium">
                              Call Us
                            </h2>
                            <Link
                              href="tel:0126571985"
                              className="text-base  leading-6 font-normal "
                            >
                              (012) 657 1985
                            </Link>
                          </div>
                        </div>
                        <div className=" flex  gap-5  ">
                          <i
                            className={`fa-solid fa-envelope text-xl text-primary`}
                          ></i>

                          <div className="flex flex-col space-y-1">
                            <h2 className="text-lg text-primary font-medium">
                              Mail us
                            </h2>
                            <Link
                              href="mailto:info@courierdirect.com"
                              className="text-base  leading-6 font-normal "
                            >
                              info@courierdirect.com
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-[#D7C9CE] border-x max-[900px]:hidden"></div>

                <div className="flex flex-col md:justify-center md:items-center gap-2 flex-1 ">
                  <div className="relative">
                    <div className=" h-[475px] rounded-2xl  md:w-[430px]    bg-black">
                      <Image
                        className="md:w-[430px] rounded-2xl  h-full object-cover absolute opacity-65 bg-black"
                        src={TrackBanner}
                        alt="TrackBanner"
                        unoptimized
                      />
                    </div>
                    <div className="absolute inset-0 text-white flex flex-col gap-3 justify-center items-center">
                      <div className="text-2xl font-medium">Ad Banner</div>
                      <p className="text-sm p-5 text-center">
                        Lorem ipsum dolor sit amet consectetur. Morbi sem urna
                        egestas vitae semper nullam dui mauris egestas. Sed quis
                        neque quisque feugiat mi vestibulum posuere accumsan
                        viverra. Congue elementum ante eget sit. Porta orci
                        aenean sit dignissim. Vestibulum tellus elit elementum
                        duis a vitae.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Image
                src={NODATA}
                className="h-[150px] w-full object-contain"
                alt="bgimage"
                unoptimized
                height={1000}
                width={1000}
                quality={100}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
