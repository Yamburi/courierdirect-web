import { LOGO } from "@/constants/images";
import UIButton from "@/components/ui/uibutton";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex  bg-primary   text-white justify-center items-center sticky top-0 left-0 right-0 z-50 ">
        <header className=" w-content large:px-0 medium:px-[2.5rem] px-[1.5rem]  flex py-3 justify-between items-center max-large:w-full">
          <div className=" flex gap-5">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-instagram"></i>
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
          <nav className="max-[1050px]:hidden flex gap-6 items-center">
            <Link href="/">Home</Link>

            <Link href="/services">Services</Link>

            <Link href="/faq">FAQ</Link>
            <Link href="/contact-us">Contact Us</Link>
            <div className="bg-primary text-white py-1 px-3 rounded-md">Track your parcel</div>
          </nav>

       
        </div>
      </div>
    </>
  );
};

export default Navbar;
