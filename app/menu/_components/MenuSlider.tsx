"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from '@/app/_store/hooks';

const MenuSlider = () => {
  // const { t, lang } = useTranslation("menu");
  const { data } = useAppSelector(state => state.menuCatageory);
  const { docs } = data;

  return (
    <div>
      <div className="mainCarousal">
        {docs && docs.map((item: any) => {
          return (
            <div className="carousalItems">
              <Link
                className={
                  "js-anchor-link flex cursor-pointer flex-col items-center"
                }
                href={item._id}
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
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuSlider;
