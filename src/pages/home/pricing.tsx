import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { TPricingPlan } from "@/schemas/pricingPlan.schema";
import { WEBSITE_BASE_URL } from "@/lib/config";
import UIButton from "@/components/ui/uibutton";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getCart, insertCart } from "@/redux/thunks/cartThunk";
import { getAccessTokenFromLocalStorage } from "@/utils/local";
import { errorToast, successToast } from "@/lib/toastify";

interface PricingProps {
  pricingPlan: TPricingPlan[];
}

const Pricing: React.FC<PricingProps> = ({ pricingPlan }) => {
  const dispatch = useAppDispatch();
  const token = getAccessTokenFromLocalStorage();
  const [activeIndex, setActiveIndex] = useState(0);
  const cartItems = useAppSelector((state) => state.cartState);

  const [pricingToggles, setPricingToggles] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    token && dispatch(getCart({ token: token }));
  }, [dispatch, token]);

  const togglePricing = (planId: string) => {
    setPricingToggles((prevToggles) => ({
      ...prevToggles,
      [planId]: !prevToggles[planId],
    }));
  };

  const getPrice = (plan: any) => {
    const showMonthly = pricingToggles[plan.id] ?? true;
    if (showMonthly)
      return plan.monthly_price ? `${plan.monthly_price}/month` : null;
    return plan.onceoff_price ? `${plan.onceoff_price}/once` : null;
  };

  const injectTickIcon = (description: string, isActive: boolean) => {
    const tickColor = isActive ? "text-white" : "text-primary";
    return description?.replace(
      /<li>/g,
      `<li class="py-1"><i class="fa-solid fa-check ${tickColor} mr-4"></i>`
    );
  };

  const handleAddToCart = (planId: string) => {
    const showMonthly = pricingToggles[planId] ?? true;
    const type = showMonthly ? "Monthly" : "Onceoff";
    const itemExists = cartItems?.data?.some(
      (item) => item.pricing_plan_id === planId && item.type === type
    );

    if (itemExists) {
      errorToast("Item Already in cart");
      return;
    }

    const dataToSent = { pricing_plan_id: planId, type };
    token &&
      dispatch(
        insertCart({
          data: dataToSent,
          token: token,
          callback: () => {
            successToast("Added To Cart");
            // token && dispatch(getCart({ token: token }));
          },
        })
      );
  };

  return (
    <>
      {pricingPlan && Array.isArray(pricingPlan) && pricingPlan?.length > 0 && (
        <div className="bg-background flex flex-col justify-center items-center py-10">
          <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] flex flex-col gap-8 text-webblack">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h2 className="text-primary w-[30rem] max-small:w-full text-3xl text-center font-semibold">
                Pricing Plans
              </h2>
              <p className="text-base font-medium w-[30rem] max-small:w-full text-center leading-6">
                Our team of experienced professionals is committed to delivering
                the highest level of service and support
              </p>
            </div>

            <div className="w-full relative">
              <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                centeredSlides
                loop
                // centeredSlidesBounds
                spaceBetween={20}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                className="w-full h-auto"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {pricingPlan?.map((plan, index) => {
                  const price = getPrice(plan);
                  if (!price) return null;
                  const isActive = activeIndex === index;

                  return (
                    <SwiperSlide key={plan.id} className="h-auto w-auto">
                      <div
                        className={`relative w-full p-4  rounded-lg shadow-card  transition-all duration-500 ease-in-out ${
                          activeIndex === index
                            ? "shadow-xl bg-primary text-white"
                            : "scale-y-90 opacity-90 bg-white text-gray-800"
                        }`}
                      >
                        <h3
                          className={`text-xl font-bold text-center ${
                            activeIndex === index
                              ? "text-white"
                              : "text-gray-800"
                          }`}
                        >
                          {plan.name}
                        </h3>

                        <div className="flex items-center justify-center gap-2 my-4">
                          <span
                            className={`font-semibold ${
                              activeIndex === index
                                ? "text-white"
                                : "text-primary"
                            }`}
                          >
                            Monthly
                          </span>
                          <div
                            className={`relative w-16 h-8 bg-white ${
                              activeIndex === index
                                ? ""
                                : "border-2 border-primary"
                            } rounded-full cursor-pointer`}
                            onClick={() => togglePricing(plan.id)}
                          >
                            <div
                              className={`absolute top-1 left-1 w-6 h-6 bg-primary rounded-full transition-transform ${
                                pricingToggles[plan.id] ?? true
                                  ? "translate-x-0"
                                  : "translate-x-8"
                              }`}
                            />
                          </div>
                          <span
                            className={`font-semibold ${
                              activeIndex === index
                                ? "text-white"
                                : "text-primary"
                            }`}
                          >
                            Once-off
                          </span>
                        </div>

                        <div className="flex justify-center items-center h-[170px] ">
                          <Image
                            src={`${WEBSITE_BASE_URL}/pricing-plan/${plan.image}`}
                            alt="frame"
                            className="w-full h-full object-contain rounded-xl"
                            height={1000}
                            width={1000}
                            unoptimized
                          />
                        </div>

                        <div
                          className={`my-4 text-3xl font-bold text-center ${
                            activeIndex === index
                              ? "text-white"
                              : "text-gray-800"
                          }`}
                        >
                          R {price}
                        </div>

                        <hr
                          className={`my-4 border-primary flex items-center justify-center mx-5  ${
                            activeIndex === index
                              ? "border-white"
                              : "text-gray-800"
                          } `}
                        />

                        <div
                          dangerouslySetInnerHTML={{
                            __html: injectTickIcon(plan.description, isActive),
                          }}
                          className=" mb-4 ml-5"
                        />

                        <div className="flex justify-center items-center">
                          {token ? (
                            cartItems?.data?.some(
                              (item) =>
                                item.pricing_plan_id === plan.id &&
                                item.type ===
                                  (pricingToggles[plan.id] ?? true
                                    ? "Monthly"
                                    : "Once-off")
                            ) ? (
                              <UIButton
                                className={`mt-6 px-4 py-2 rounded-lg ${
                                  activeIndex === index
                                    ? "bg-white text-primary"
                                    : "bg-primary text-white "
                                }`}
                                type={
                                  activeIndex === index
                                    ? "secondary"
                                    : "primary"
                                }
                                label="Purchase"
                                href="/cart"
                              />
                            ) : (
                              <UIButton
                                label="Get Started"
                                className={`mt-6 px-4 py-2 rounded-lg ${
                                  activeIndex === index
                                    ? "bg-white text-primary"
                                    : "bg-primary text-white "
                                }`}
                                type={
                                  activeIndex === index
                                    ? "secondary"
                                    : "primary"
                                }
                                onClick={() => handleAddToCart(plan.id)}
                              />
                            )
                          ) : (
                            <UIButton
                              label="Get Started"
                              href="/login"
                              className={`mt-6 px-4 py-2 rounded-lg ${
                                activeIndex === index
                                  ? "bg-white text-primary"
                                  : "bg-primary text-white "
                              }`}
                              type={
                                activeIndex === index ? "secondary" : "primary"
                              }
                            />
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <i className="swiper-button-prev-custom fa-regular fa-chevron-left rounded-full bg-white border-[1px] border-[#B4BEC8] h-[30px] w-[30px] flex justify-center items-center text-sm text-[#37383a] font-extrabold cursor-pointer absolute top-[45.5%] left-[-1%] z-10 shadow-shadow"></i>
              <i className="swiper-button-next-custom fa-regular fa-chevron-right rounded-full bg-white border-[1px] border-[#B4BEC8] h-[30px] w-[30px] flex justify-center items-center text-sm text-[#37383a] font-extrabold cursor-pointer absolute top-[45.5%] right-[-1%] z-10 shadow-shadow"></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pricing;
