import { LOGO } from "@/constants/images";
import UIButton from "@/components/ui/uibutton";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { getAccessTokenFromLocalStorage } from "@/utils/local";
import { getCart } from "@/redux/thunks/cartThunk";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getService } from "@/redux/thunks/serviceThunk";
import { WEBSITE_BASE_URL } from "@/lib/config";

const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAccountModal, setShowAccountModal] = useState<boolean>(false);
  const [showNavModal, setShowNavModal] = useState<boolean>(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState<boolean>(false);
  const [showServicesDropdown, setShowServicesDropdown] =
    useState<boolean>(false);
  const token = getAccessTokenFromLocalStorage();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartState);
  const services = useAppSelector((state) => state.serviceState);

  useEffect(() => {
    token && dispatch(getCart({ token: token }));
    dispatch(getService());
  }, [dispatch, token]);

  const modalRef = useRef<HTMLDivElement>(null);
  const navModalRef = useRef<HTMLDivElement>(null);
  const accountModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navModalRef.current &&
        !navModalRef.current.contains(event.target as Node)
      ) {
        setShowNavModal(false);
      }
    };

    if (showNavModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNavModal]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accountModalRef.current &&
        !accountModalRef.current.contains(event.target as Node)
      ) {
        setShowNavModal(false);
      }
    };

    if (showAccountModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAccountModal]);

  return (
    <div className="flex justify-center items-center bg-primary sticky top-0 left-0 right-0 z-50 shadow-slider">
      <header className="w-content large:px-0 medium:px-[2.5rem] px-[1.5rem] text-white flex py-5 justify-between items-center max-large:w-full">
        <Link href="/" className="w-[7rem] md:w-[9rem]">
          <Image src={LOGO} alt="logo" unoptimized />
        </Link>
        <div className="max-[1050px]:hidden flex gap-6 items-center">
          <nav className="flex gap-6 items-center">
            <Link href="/">Home</Link>
            <div className="relative group">
              <Link href="/about-us">
                About Us{" "}
                <i className="fa-regular fa-chevron-down pl-1 text-xs"></i>
              </Link>
              <div className="absolute  hidden group-hover:grid grid-cols-1 gap-2 bg-white p-4 shadow-slider rounded-lg z-50 w-[12rem]">
                <ul className="text-webblack">
                  <li>
                    <Link
                      href={`/about-us`}
                      className="flex items-center gap-4 font-medium hover:bg-gray-100 p-2 rounded hover:text-primary"
                    >
                      Introduction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/how-we-work`}
                      className="flex items-center gap-4 font-medium hover:bg-gray-100 p-2 rounded hover:text-primary"
                    >
                      How we work
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative group">
              <Link href="/services">
                Services{" "}
                <i className="fa-regular fa-chevron-down pl-1 text-xs"></i>
              </Link>
              <div className="absolute  hidden group-hover:grid grid-cols-2 gap-2 bg-white p-4 shadow-slider rounded-lg z-50 w-[40rem]">
                {services?.data?.map((service) => (
                  <Link
                    href={`/services/${service.slug}`}
                    key={service.id}
                    className="flex items-center gap-4 font-medium hover:bg-gray-100 p-2 rounded hover:text-primary"
                  >
                    <div className="h-12 w-12">
                      <Image
                        src={`${WEBSITE_BASE_URL}/service/${service.image}`}
                        alt={service.name}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-black font-medium leading-6 hover:text-primary">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/pricing-plans">Pricing Plans</Link>
            <Link href="/teams">Team</Link>
            <Link href="/contact-us">Contact Us</Link>
            <UIButton
              href="/quote"
              type="secondary"
              label="Quote Now"
              style={{ borderRadius: "2rem", fontWeight: "600" }}
            />
          </nav>

          <div className="flex gap-6">
            <Link href="/cart" className="relative">
              <span className="absolute z-10 top-[-50%] right-[-50%] flex justify-center items-center h-6 w-6 bg-black text-white text-xs rounded-full">
                {cartItems?.data?.length}
              </span>
              <i className="fa-solid fa-cart-shopping text-xl"></i>
            </Link>
            {token ? (
              <Link href="/myaccount">
                <i className="fa-solid fa-user text-xl"></i>
              </Link>
            ) : (
              <div
                className="relative cursor-pointer"
                onClick={() => setShowAccountModal((prev) => !prev)}
              >
                <i className="fa-solid fa-user text-xl"></i>
                {showAccountModal && (
                  <div
                    ref={accountModalRef}
                    className="absolute top-[100%] right-0  flex justify-center items-center z-50 bg-white p-5 rounded-lg shadow-lg"
                  >
                    <div className="flex flex-col gap-4">
                      <UIButton
                        href="/login"
                        label="Login"
                        type="primary"
                        style={{ width: "14rem" }}
                      />
                      <div className="text-[#333232] text-base text-center">
                        Not registered yet?{" "}
                        <Link
                          href="/register"
                          className="text-primary font-semibold"
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="min-[1050px]:hidden flex items-center">
          <div className="flex gap-6">
            <Link href="/cart" className="relative">
              <span className="absolute z-10 top-[-50%] right-[-50%] flex justify-center items-center h-6 w-6 bg-black text-white text-xs rounded-full">
                {cartItems?.data?.length}
              </span>
              <i className="fa-solid fa-cart-shopping text-xl"></i>
            </Link>
            {token ? (
              <Link href="/myaccount">
                <i className="fa-solid fa-user text-xl"></i>
              </Link>
            ) : (
              <div
                className="relative cursor-pointer"
                onClick={() => setShowModal((prev) => !prev)}
              >
                <i className="fa-solid fa-user text-xl"></i>
                {showModal && (
                  <div
                    ref={modalRef}
                    className="absolute top-[100%] right-[-100%]  flex justify-center items-center z-50 bg-white p-5 rounded-lg shadow-lg"
                  >
                    <div className="flex flex-col gap-4">
                      <UIButton
                        href="/login"
                        label="Login"
                        type="primary"
                        style={{ width: "14rem" }}
                      />
                      <div className="text-[#333232] text-base text-center">
                        Not registered yet?{" "}
                        <Link
                          href="/register"
                          className="text-primary font-semibold"
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <button
              onClick={() => setShowNavModal(!showModal)}
              className="text-white text-2xl"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {showNavModal && (
            <div
              className="fixed top-0 right-0 flex flex-col bg-white text-webblack max-h-screen h-screen shadow-lg z-50 w-[80vw] max-w-md transition-transform duration-300 ease-in-out transform translate-x-0 overflow-auto"
              ref={navModalRef}
            >
              <div className="flex justify-between bg-primary p-4">
                <Link href="/" className="w-[7rem]">
                  <Image src={LOGO} alt="logo" unoptimized />
                </Link>
                <i
                  className="fa-regular fa-times text-2xl text-white hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                  onClick={() => setShowNavModal(false)}
                ></i>
              </div>

              <div className="flex flex-col gap-2 px-4 py-4 text-base font-medium">
                <Link
                  href="/"
                  className="py-2 hover:text-primary transition-colors duration-200 border-b-2 border-gray-200"
                  onClick={() => setShowNavModal(false)}
                >
                  Home
                </Link>
                <div className="py-2  border-b-2 border-gray-200">
                  <button
                    onClick={() => setShowAboutDropdown(!showAboutDropdown)}
                    className="w-full text-left flex items-center justify-between  hover:text-primary transition-colors duration-200"
                  >
                    About Us{" "}
                    <i
                      className={`fa-regular fa-chevron-${
                        showAboutDropdown ? "up" : "down"
                      } pl-1 text-sm`}
                    ></i>
                  </button>
                  {showAboutDropdown && (
                    <div className="pl-4 space-y-2 pt-2">
                      <Link
                        href="/about-us"
                        className="block hover:text-primary py-2 transition-colors duration-200 border-b-2 border-gray-200  pt-2 font-normal"
                        onClick={() => setShowNavModal(false)}
                      >
                        Introduction
                      </Link>
                      <Link
                        href="/how-we-work"
                        className="block py-2 hover:text-primary transition-colors duration-200 font-normal"
                        onClick={() => setShowNavModal(false)}
                      >
                        How We Work
                      </Link>
                    </div>
                  )}
                </div>
                <div className="py-2  border-b-2 border-gray-200">
                  <button
                    onClick={() =>
                      setShowServicesDropdown(!showServicesDropdown)
                    }
                    className="w-full text-left flex items-center justify-between  hover:text-primary transition-colors duration-200"
                  >
                    Services{" "}
                    <i
                      className={`fa-regular fa-chevron-${
                        showServicesDropdown ? "up" : "down"
                      } pl-1 text-sm`}
                    ></i>
                  </button>
                  {showServicesDropdown && (
                    <div className="pl-4 space-y-2 first:pt-2">
                      {services?.data?.map((service) => (
                        <Link
                          href={`/services/${service.slug}`}
                          key={service.id}
                          className="block py-2 hover:text-primary transition-colors duration-200 border-b-2 border-gray-200 last:border-b-0  first:pt-2 font-normal"
                          onClick={() => setShowNavModal(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/pricing-plans"
                  className="py-2 hover:text-primary transition-colors duration-200 border-b-2 border-gray-200"
                  onClick={() => setShowNavModal(false)}
                >
                  Pricing Plans
                </Link>
                <Link
                  href="/teams"
                  className="py-2 hover:text-primary transition-colors duration-200 border-b-2 border-gray-200"
                  onClick={() => setShowNavModal(false)}
                >
                  Team
                </Link>
                <Link
                  href="/contact-us"
                  className="py-2 hover:text-primary transition-colors duration-200 border-b-2 border-gray-200"
                  onClick={() => setShowNavModal(false)}
                >
                  Contact Us
                </Link>
                <UIButton
                  href="/quote"
                  label="Quote Now"
                  type="secondary"
                  style={{
                    borderRadius: "2rem",
                    marginTop: "1rem",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
