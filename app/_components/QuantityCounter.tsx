"use client";
import React, { useState } from "react";
import Image from "next/image";
import plus from "../_assets/svgs/plus.svg";
import delIcon from "../_assets/svgs/delIcon.svg";

interface Props {
  delIconflag?: boolean;
  color: string;
  bgColor?: string;
  count: number;
}

const QuantityCounter = ({ delIconflag, color, bgColor, count }: Props) => {
  const [quantity, setQuantity] = useState(count);

  function incrementCounter() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decrementCounter() {
    if (quantity > count) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }
  return (
    <div>
      <div
        className={`flex items-center gap-x-2.5 rounded-3xl ${bgColor} mb-[3px] ml-1`}
        style={
          delIconflag
            ? {
                boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }
            : {}
        }
      >
        <div
          className="flex h-[24px] w-[24px] rounded-3xl items-center justify-center bg-[#C84044]"
          onClick={incrementCounter}
        >
          {/* <BsPlus className="fill-red" /> */}
          <Image src={plus} alt="plusIcon" />
        </div>
        <span
          className={
            quantity === 0 ? "hidden" : `text-[11px] font-bold ${color}`
          }
        >
          {quantity}
        </span>
        <div className={quantity === 0 ? "hidden" : ""}>
          <div
            className={`flex h-[24px] w-[24px] cursor-pointer rounded-3xl items-center justify-center text-white`}
            onClick={decrementCounter}
          >
            {delIconflag ? (
              <Image src={delIcon} alt="delIcon" />
            ) : (
              <p
                className={`text-center h-[24px] w-[24px] rounded-3xl ${
                  quantity === 1 ? " bg-[#D9D9D9] " : " bg-[#C84044] "
                }`}
              >
                -
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;
