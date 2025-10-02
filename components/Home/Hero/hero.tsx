import React from "react";

const hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* background Colour  */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-orange-300 "></div>
      {/* text content  */}
      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div>
            <h1
              className=" text-[25px] mb-4 md:mb-0 text-center md:text-[35px] 
            lg:text-[45px] tracking-0.7rem] text-black font-bold uppercase ">
              My name is Precious offodile. i like working
            </h1>
            <p className="md:text-xl text-center text-lg text-white  font-semibold [word-spacing:5px] ">
              this is justs a demo please, need to create an about me section
              afer ward s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
