import React from "react";

interface Props {
  btnText1: string;
  btnline?: boolean;
  btnText2?: string;
  btnClasses: string;
  // font: string;
  // btnPadding: string;
  // center?: string;
  // btnHeight: string;
  // btnWidth: string;
  // bgColor: string;
}

const CartBtn = ({ btnClasses, btnText1, btnline, btnText2 }: Props) => {
  return (
    <div>
      <button
        type="button"
        // className="flex justify-around focus:outline-none text-white rounded-lg text-sm px-4 py-2 mr-2 mb-2 bg-[#C02328] w-[152px] h-[33px] text-[12px] font-semibold"
        className={`flex focus:outline-none text-white ${btnClasses}`}
      >
        <div>{btnText1}</div>
        {btnline && <div className="w-[1px] h-[23px] bg-white"></div>}
        <div>{btnText2}</div>
      </button>
    </div>
  );
};

export default CartBtn;
