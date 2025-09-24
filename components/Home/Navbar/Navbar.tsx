import React from "react";
import { FaPassport } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-blue-950 transition-all duration-300 h-[12vh] z-[1000]">
      <div className="flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto">
        <h1 className="text-white">Navbar</h1>
        {/*Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <FaPassport className="text-white w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
