import { LOGO, WHITELOGO } from "@/constants/images";
import UIButton from "@/components/ui/uibutton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [showNavModal, setShowNavModal] = useState<boolean>(false);
  const navModalRef = useRef<HTMLDivElement>(null);

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

  // useEffect(() => {
  //   const fetchChats = () => {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //     userId && dispatch(getChatUnseenCount({ id: userId }));
  //   };
  //   fetchChats();
  //   const intervalId = setInterval(fetchChats, 1 * 60 * 1000);
  //   return () => clearInterval(intervalId);
  // }, [dispatch, userId]);

  return (
    <>
      <div className="flex  bg-primary   text-white justify-center items-center sticky top-0 left-0 right-0 z-50 ">
        <header className=" w-content large:px-0 medium:px-[2.5rem] px-[1.5rem]  flex py-3 justify-between items-center max-large:w-full max-small:hidden">
          <div className=" flex gap-5">
            <Link
              href="https://www.facebook.com/courierdirect/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link href="https://x.com/courierdirect" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="https://www.instagram.com/courier_direct/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-7">
            <div className="flex gap-2 justify-center items-center">
              <i className="fa-solid fa-phone"></i>
              <Link href="tel:+27696318051">(012) 657 1985 </Link>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <i className="fa-regular fa-envelope"></i>
              <Link href="mailto:info@courierdirect.com">
                info@courierdirect.com
              </Link>
            </div>
          </div>
        </header>
      </div>
      <div className="bg-white justify-center items-center sticky top-0 left-0 right-0 z-50 flex">
        <div className="w-content  large:px-0 medium:px-[2.5rem] px-[1.5rem]  flex py-3 justify-between items-center max-large:w-full">
          <Link href="/" className="w-[9rem] md:w-[9rem]">
            <Image src={LOGO} alt="logo" unoptimized />
          </Link>
          <nav className="max-[900px]:hidden flex gap-6 items-center">
            <Link href="/">Home</Link>

            <Link href="/service">Services</Link>

            <Link href="/faq">FAQ</Link>
            <Link href="/contact-us">Contact Us</Link>
            <UIButton
              href="/tracking"
              type="primary"
              label={
                <span>
                  <i className="fa-solid fa-truck-fast pr-2"></i> Track Your
                  Parcel
                </span>
              }
            />
            {/* <div className="bg-primary text-white py-1 px-3 rounded-md">
              Track your parcel
            </div> */}
          </nav>
          <div className="min-[900px]:hidden flex items-center">
            <div className="flex gap-6">
              <button
                onClick={() => setShowNavModal(!showNavModal)}
                className="text-primary text-2xl"
              >
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
            </div>

            {showNavModal && (
              <div
                className="fixed top-0 right-0 flex flex-col bg-white text-webblack max-h-screen h-screen shadow-lg z-50 w-[80vw] max-w-md transition-transform duration-300 ease-in-out transform translate-x-0 overflow-auto"
                ref={navModalRef}
              >
                <div className="flex justify-between bg-primary p-4">
                  <Link href="/" className="w-[7rem]">
                    <Image src={WHITELOGO} alt="logo" unoptimized />
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

                  <Link
                    href="/services"
                    className="py-2 hover:text-primary transition-colors duration-200 border-b-2 border-gray-200"
                    onClick={() => setShowNavModal(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/faq"
                    className="py-2 hover:text-primary transition-colors duration-200 border-b-2 border-gray-200"
                    onClick={() => setShowNavModal(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/contact-us"
                    className="py-2 hover:text-primary transition-colors duration-200 border-b-2 border-gray-200"
                    onClick={() => setShowNavModal(false)}
                  >
                    Contact Us
                  </Link>
                  <UIButton
                    href=""
                    type="primary"
                    style={{ marginTop: "0.5rem" }}
                    label={
                      <span>
                        <i className="fa-solid fa-truck-fast pr-2"></i> Track
                        Your Parcel
                      </span>
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
