import React from "react";
import Image from "next/image";
import fire from "../../_assets/svgs/fire.svg";

const AddOnSelecter = ({ title, price, caleries }: any) => {
  return (
    <div>
      <div className="flex items-center justify-between border-b-[1px] border-[#0000000f] mt-[8px]">
        <div className="w-full">
          <label className="container">
            {title}
            <div>
              <input className="check" type="checkbox" />
              <span className="checkmark"></span>
            </div>
          </label>
        </div>
        <div className="text-[#494949 ] text-[5px] w-[30px]">
          <div className="text-right">{price}</div>
          <div className="flex items-baseline">
            <div className="mr-[2px]">
              <Image src={fire} alt="fire" className="w-[8px] h-[8px]" />
            </div>
            <h4>{caleries}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnSelecter;
