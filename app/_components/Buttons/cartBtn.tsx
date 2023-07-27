import React from "react";
import type { FC } from "react";

import { CartBtn } from "../../_lib/types/addCart";

const CartBtn: FC<CartBtn> = ({ btnClasses, btnText1, btnline, btnText2, onClick= () => {} , cartItems}) => {
  console.log("cartItems", cartItems)
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        // disabled={!cart?.items?.length ? true : false}
        // className="flex justify-around focus:outline-none text-white rounded-lg text-sm px-4 py-2 mr-2 mb-2 bg-[#C02328] w-[152px] h-[33px] text-[12px] font-semibold"
        className={`flex focus:outline-none text-white ${btnClasses} `}
      >
        <div>{btnText1}</div>
        {btnline && <div className="w-[1px] h-[23px] bg-white"></div>}
        <div>{btnText2}</div>
      </button>
    </div>
  );
};

export default CartBtn;
