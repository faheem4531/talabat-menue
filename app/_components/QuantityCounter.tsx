"use client";
import React, { useState } from "react";
import type { FC } from "react";

import Image from "next/image";

import { QuantityCounter } from "../_lib/types/genericComponents";

import plus from "../_assets/svgs/plus.svg";
import delIcon from "../_assets/svgs/delIcon.svg";

const QuantityCounter: FC<QuantityCounter> = ({
  delIconflag,
  shadow,
  color,
  bgColor,
  count = 0,
  incrementCounter = () => { },
  decrementCounter = () => { },
  navigate = () => { },
  actionType
}) => {
  return (
    <div>
      <div
        className={`flex items-center gap-x-2.5 rounded-3xl ${bgColor} mb-[3px] ml-1`}
        style={
          shadow
            ? {
              boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }
            : {}
        }
      >
        {/* <div
          className="flex h-[24px] w-[24px] rounded-3xl items-center justify-center bg-[#C84044]"
          onClick={()=>{
            actionType === "increment" ? incrementCounter() : navigate();
            if ('vibrate' in navigator) {
              navigator.vibrate(200);
              console.log('Vibration is on.');
            } else {
              console.log('Vibration is not supported on this device.');
            }
          }
         }
        >
          <Image src={plus} alt="plusIcon" />
        </div> */}
        <div className={count === 0 ? "hidden" : ""}>
          <div
            className={`flex h-[24px] w-[24px] cursor-pointer rounded-3xl items-center justify-center text-white`}
            onClick={() => {
              decrementCounter()
              if ('vibrate' in navigator) {
                navigator.vibrate(200);
                console.log('Vibration is on.');
              } else {
                console.log('Vibration is not supported on this device.');
              }
            }}
          >
            {delIconflag ? (
              <div className="text-center h-[24px] w-[24px] rounded-3xl  bg-[#C84044] flex justify-center items-center">
                <Image src={delIcon} alt="delIcon" />
              </div>
            ) : (
              <p className="text-center h-[24px] w-[24px] rounded-3xl  bg-[#C84044] ">
                -
              </p>
            )}
          </div>
        </div>
        <span
          className={count === 0 ? "hidden" : `text-[11px] font-bold ${color}`}
        >
          {count}
        </span>
        <div
          className="flex h-[24px] w-[24px] rounded-3xl items-center justify-center bg-[#C84044]"
          onClick={() => {
            actionType === "increment" ? incrementCounter() : navigate();
            if ('vibrate' in navigator) {
              navigator.vibrate(200);
              console.log('Vibration is on.');
            } else {
              console.log('Vibration is not supported on this device.');
            }
          }
          }
        >
          {/* <BsPlus className="fill-red" /> */}
          <Image src={plus} alt="plusIcon" />
        </div>
        {/* <div className={count === 0 ? "hidden" : ""}>
          <div
            className={`flex h-[24px] w-[24px] cursor-pointer rounded-3xl items-center justify-center text-white`}
            onClick={()=>{
              decrementCounter()
              if ('vibrate' in navigator) {
                navigator.vibrate(200);
                console.log('Vibration is on.');
              } else {
                console.log('Vibration is not supported on this device.');
              }
            }}
          >
            {delIconflag ? (
              <Image src={delIcon} alt="delIcon" />
            ) : (
              <p className="text-center h-[24px] w-[24px] rounded-3xl  bg-[#C84044] ">
                -
              </p>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default QuantityCounter;
