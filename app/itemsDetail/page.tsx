import React from "react";
import Image from "next/image";
import heroImg from "../_assets/pngs/detailHeroImg.png";
import FlagIcon from "../_assets/pngs/navFlag.png";

const itemsDetail = () => {
  return (
    <div>
      <div className="flex justify-between p-4 items-center relative z-[1]">
        <div>{/* <SideNavbar /> */}</div>
        <div className="flex items-center">
          <div className="text-[#C84044] text-1xl">Ar</div>
          <div className="ml-2">
            <Image src={FlagIcon} alt="FlagIcon" />
          </div>
        </div>
      </div>
      <div className=" h-64">
        <div className="h-64 absolute heroImgMain">
          <Image
            src={heroImg}
            alt="Restaurant Placeholder"
            className="heroImg"
          />
        </div>
      </div>
      <div className="px-4">
        <h4 className="text-[15px] text-[#494949] font-semibold mb-[11px]">
          Breakfast
        </h4>
      </div>
    </div>
  );
};

export default itemsDetail;
