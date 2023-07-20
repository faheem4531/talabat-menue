"use client";
import React, { useState } from "react";
import Image from "next/image";
import plus from "../_assets/svgs/plus.svg";
import delIcon from "../_assets/svgs/delIcon.svg";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(0);

  function incrementCounter() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decrementCounter() {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }
  return (
    <div>
      <div
        className="flex items-center gap-x-2.5 rounded-3xl bg-[#C84044] mb-[3px] ml-1"
        style={{
          boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          className="flex h-[24px] w-[24px] items-center justify-center"
          onClick={incrementCounter}
        >
          {/* <BsPlus className="fill-red" /> */}
          <Image src={plus} alt="plusIcon" />
        </div>
        <span
          className={
            quantity === 0 ? "hidden" : "text-[11px] font-bold text-white"
          }
        >
          {quantity}
        </span>
        <div className={quantity === 0 ? "hidden" : ""}>
          <div
            className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center"
            onClick={decrementCounter}
          >
            <Image src={delIcon} alt="delIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;
