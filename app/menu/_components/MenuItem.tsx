"use client";
import React, { useState } from "react";
import Image from "next/image";
import heroImg from "../../_assets/pngs/heroImg.png";
import QuantityCounter from "../../_components/QuantityCounter";
import fire from "../../_assets/svgs/fire.svg";
import emptyHeart from "../../_assets/svgs/emptyHeart.svg";
import fillHeart from "../../_assets/svgs/filledHeart.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MenuItem = ({ itemsImg, title, discription, calerioes, price }: any) => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const router = useRouter();
  const handleAddToWishList = (event: any) => {
    setIsItemAdded(!isItemAdded);
    event.stopPropagation();
  };

  const handleItem = (event: any) => {
    event.stopPropagation();
  };

  const handleItemClick = () => {
    router.push("/itemsDetail");
  };
  return (
    <div
      className="content relative flex cursor-pointer border-b-[1px] border-[#0000000f] p-[14px] pt-[9px] shadow-4 pb-4"
      onClick={handleItemClick}
    >
      <div className="flex grow flex-col justify-between">
        <div className="relative flex items-center justify-between">
          <h3 className="text-[12px] font-[500] text-[#494949]">
            {/* {lang === "ar" ? menuItem?.nameAr : menuItem?.name} */}
            {title}
          </h3>
        </div>
        <h4 className="my-1 line-clamp-2 text-[8px] text-[#00000070] w-52">
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
          <div onClick={handleItem}>
            <QuantityCounter
              color="text-white"
              bgColor="bg-[#C84044]"
              count={0}
              delIconflag={true}
            />
          </div>
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
          width={400}
          height={300}
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
