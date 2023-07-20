"use client";
import React, { useState } from "react";
import Image from "next/image";
import heroImg from "../../_assets/pngs/heroImg.png";
import QuantityCounter from "../../_components/QuantityCounter";
import fire from "../../_assets/svgs/fire.svg";
import emptyHeart from "../../_assets/svgs/emptyHeart.svg";
import fillHeart from "../../_assets/svgs/filledHeart.svg";

const MenuItem = ({ itemsImg, title, discription, calerioes, price }: any) => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const handleAddToWishList = () => {
    setIsItemAdded(!isItemAdded);
  };
  return (
    <div
      // id={menuItem?._id}
      className="content relative flex cursor-pointer border-b-[1px] border-[#0000000f] p-[14px] pt-[9px] shadow-4 pb-4"
      // isBorder && "border-red",
      // isItemSoldout && "pointer-events-none cursor-not-allowed opacity-40"
    >
      {/* {(menuItem?.soldOut || !!menuItem?.sticker) && (
        <span className="ribbon top-[3px]">
          {isItemSoldout ? t("soldOut") : getSticker(menuItem?.sticker)}
        </span>
      )} */}

      <div className="flex grow flex-col justify-between">
        <div className="relative flex items-center justify-between">
          <h3 className="text-[12px] font-[500] text-[#494949]">
            {/* {lang === "ar" ? menuItem?.nameAr : menuItem?.name} */}
            {title}
          </h3>
          {/* <div
            onClick={handleAddToWishList}
            className="absolute right-10 z-[1]"
          >
            {isStar && (
              <ImStarFull
                className="h-5 w-5 cursor-pointer"
                color="rgb(255,201,14)"
              />
            )}
          </div> */}
        </div>
        <h4 className="my-1 line-clamp-2 text-[8px] text-[#00000070] ">
          {/* {lang === "ar" ? menuItem?.description_ar : menuItem?.description} */}
          {discription}
        </h4>
        <div className="flex item-center ">
          <div className="mr-[3px]">
            <Image src={fire} alt="fire" />
          </div>
          <h4 className="font-extrabold text-darkBlue text-[8px]">
            {/* {menuItem.calories} */}
            {calerioes}
          </h4>
        </div>
        <div className="flex items-center">
          <span className="text-[11px] font-semibold text-[#C02328] ">
            {/* {menuItem?.price}  */}
            {price}
          </span>
          <QuantityCounter />
        </div>
      </div>
      <div className="mr-2.5 relative">
        <Image
          style={{
            minHeight: "84px",
            maxHeight: "84px",
            minWidth: "84px",
            maxWidth: "84px",
            borderRadius: 10,
            objectFit: "cover",
          }}
          alt="{menuItem?.name}"
          src={itemsImg}
        />
        <div onClick={handleAddToWishList}>
          {!isItemAdded ? (
            <Image
              src={emptyHeart}
              alt="emptyHeartIcon"
              className="absolute bottom-[-18px] right-[-12px]"
            />
          ) : (
            <Image
              src={fillHeart}
              alt="emptyHeartIcon"
              className="absolute bottom-[-18px] right-[-12px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
