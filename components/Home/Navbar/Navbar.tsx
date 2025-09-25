import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { FaPassport } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000] fixed  w-full">
      <div className="flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto">
        {/*Logo */}
        <div className="flex items-center space-x-2">
          {/*change background colour later */}
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <FaPassport className="text-white w-6 h-6" />
          </div>
          <h1 className="text-white font-bold text-xl md:text-2xl uppercase">
            Precious O.
          </h1>
        </div>
        {/* Navigation Links */}
        <div className=" hidden lg:flex items-center space-x-10 ">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p
                className="relative text-white text-xl font-medium  w-fit block
  after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full
  after:bottom-0 after:left-0 after:scale-x-0 after:transform after:transition-transform after:duration-300 after:origin-right
  hover:after:scale-x-100">
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Buttons  */}
        <div className="flex items-center space-x-4">
          <button
            className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 
        transition-all duration-200 rounded-lg ">
            Download Cv
          </button>
          {/* Burger Menu  */}
          <RxHamburgerMenu className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
