import React from "react";

const cartBtn = () => {
  return (
    <div>
      <button
        type="button"
        className="flex justify-around focus:outline-none text-white rounded-lg text-sm px-4 py-2 mr-2 mb-2 bg-[#C02328] w-[152px] h-[33px] text-[12px] font-semibold"
      >
        <div>Add</div>
        <div className="w-[1px] h-[23px] bg-white"></div>
        <div>96.00 SR</div>
      </button>
    </div>
  );
};

export default cartBtn;
