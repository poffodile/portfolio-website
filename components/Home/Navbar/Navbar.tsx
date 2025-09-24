import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { FaPassport } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]">
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
        <div className=" hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p
                className="relative text-white text-base font-medium w-fit block 
              after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0  after:hover:scale-x-100 after:transition duration-300 after:origin-right">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
