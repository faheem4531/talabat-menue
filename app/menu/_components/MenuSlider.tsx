"use client";
import React from "react";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/app/_store/hooks";

const MenuSlider: FC<{}> = () => {
  // const { t, lang } = useTranslation("menu");
  const { data } = useAppSelector((state) => state.menuCatageory);
  // const { docs } = data;

  return (
    <div>
      <div className="mainCarousal">
        {data?.docs &&
          data?.docs.map((item: any, index: number) => {
            return (
              <div className="carousalItems" key={index}
                onClick={() => {
                  const menuItemElement = document.getElementById(item._id);
                  if (menuItemElement) {
                    menuItemElement.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                    });
                  }
                }}>
                <div
                  className={
                    "js-anchor-link flex cursor-pointer flex-col items-center"
                  }
                >
                  <Image
                    className="border-red"
                    src={item.image}
                    alt="{category?.name}"
                    width={74}
                    height={71}
                    style={{
                      border: "4px solid #C84044",
                      borderRadius: "8px",
                      minWidth: "74px",
                      minHeight: "71px",
                      objectFit: "cover",
                      maxWidth: "74px",
                      maxHeight: "71px",
                    }}
                  />
                  <span className="whitespace-pre text-[11px] mt-1 font-medium text-[#6D6A75]">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MenuSlider;
