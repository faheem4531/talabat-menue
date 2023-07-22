import React from "react";
import Image from "next/image";
import searchIcon from "../../_assets/pngs/inputSearch.png";

const InputModal = () => {
  return (
    <div>
      <div className="relative flex w-[365px] m-auto">
        <Image
          src={searchIcon}
          alt="hamburger-menu-icon"
          className="absolute bottom-5 left-[17px] top-1/2 h-3 w-3 -translate-y-1/2 transform "
        />
        <input
          className=" h-[33px] w-full rounded-5px border border-transparent px-10  text-xs font-sm shadow-10 transition-all duration-300 ease-in-out focus:border-red focus:outline-none rounded-[3px] shadow-lg text-black placeholder-black"
          placeholder="What are you looking for"
          style={{
            boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        />
      </div>
    </div>
  );
};
export default InputModal;