import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
          <Image
            src="/PoweredByDevDisplay.png"
            alt="Powered By DevDisplay"
            width={210}
            height={65}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};


export default Navbar;
