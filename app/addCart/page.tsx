"use client";
import React from "react";
import SideNavbar from "../_components/SideNavbar/SideNavbar";
import Image from "next/image";
import FlagIcon from "../_assets/pngs/navFlag.png";
import CartItem from "./_components/cartItem";
import CartBtn from "../_components/Buttons/cartBtn";

const addCart = () => {
  const cartItems = [
    {
      title: "PIZZA: 12 WOOD-FRIED",
      price: "100 SAR",
      cartImg: require("../_assets/svgs/cartItemImg.svg"),
    },
    {
      title: "PIZZA: 12 WOOD-FRIED",
      price: "100 SAR",
      cartImg: require("../_assets/svgs/cartItemImg.svg"),
    },
  ];
  return (
    <div>
      <div className="flex justify-between p-4 items-center relative z-[1]">
        <div>
          <SideNavbar hamBurgerIcon={true} />
        </div>
        <div className="flex items-center">
          <div className="text-[#C84044] text-1xl">Ar</div>
          <div className="ml-2">
            <Image src={FlagIcon} alt="FlagIcon" />
          </div>
        </div>
      </div>
      <div className="mt-[30px] cartItemsMain">
        {cartItems.map((items) => {
          return (
            <CartItem
              title={items.title}
              price={items.price}
              cartImg={items.cartImg}
            />
          );
        })}
      </div>
      <div
        className="h-[191px] w-full bg-[#C02328] rounded-lg pt-5 pb-1 px-2"
        style={{
          boxShadow: " 0px 2.5px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex gap-4 ml-[41px]">
          <div className="w-[130px] h-[38px] bg-[#F5866B] rounded-lg text-[15px] font-[400] px-[8px] py-2 text-white">
            Have a coupon?
          </div>
          <input className="w-[130px] h-[38px] bg-white rounded-lg px-3" />
          <button className="w-[38px] h-[38px] rounded-full bg-[#F5866B] text-[14px] font-[400] px-[4px] py-2 text-white">
            ADD
          </button>
        </div>
        <div className="flex gap-5 justify-center mt-[18px]">
          <div className="text-[15px] font-[400] pr-3 text-white">
            <div className="mr-4">Subtotal:</div>
            <div className="mt-[9px]">TAX:</div>
          </div>

          <div className="text-[15px] font-[400] pr-3 text-white">
            <div>17.39 SAR</div>
            <div className="mt-[9px]">2.61 SAR</div>
          </div>
        </div>
        <div className="flex justify-between mt-[35.5px]">
          <div className="text-[15px] font-[400] text-white">Total</div>
          <div className="text-[15px] font-[400] pr-1 text-white">20 SAR</div>
        </div>
      </div>
      <div className="px-4 mt-[53px] mb-6">
        <CartBtn
          btnText1="Confirm Order"
          btnClasses="justify-center rounded-[6px] bg-[#C02328] w-full text-[14px] font-[400] py-[15px]"
        />
      </div>
    </div>
  );
};

export default addCart;
