import React from "react";
import type { FC } from "react";

import Image from "next/image";

import fire from "../../_assets/svgs/fire.svg";
import { AddOnSelecter } from "../../_lib/types/itemsDetails";

const AddOnSelecter: FC<AddOnSelecter> = ({ title, price, caleries, addOption, checked = false, addOnId, optionId, multiple, isChecked }) => {

  return (
    <div>
      <div className="flex items-center justify-between border-b-[1px] border-[#0000000f] mt-[8px]">
        <div className="w-full">
          <label className="container">
            {title}
            <div>
              <input className="check hidden" type="checkbox"
                onClick={(e) => addOption({ addOnId, optionId, multiple })}
                checked={isChecked(addOnId, optionId)}
              />
              <span className="checkmark"></span>
            </div>
          </label>
        </div>
        <div className="text-[#494949 ] text-[8px] w-[60px]">
          <div className="text-right">{price}</div>
          <div className="flex items-baseline justify-end">
            <div className="mr-[2px]">
              <Image src={fire} alt="fire" className="w-[8px] h-[8px]" />
            </div>
            <h4>{caleries} kcal</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnSelecter;
