"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../../_assets/pngs/heroImg.png";
import AnchorLink from "@/app/_components/AnchorLink";
import MenuItem from "./MenuItem";

const MenuSlider = ({ data }: any) => {
  // const { t, lang } = useTranslation("menu");
  console.log("data", data);

  return (
    <div>
      <div className="mainCarousal">
        {data.map((item: any) => {
          return (
            <div className="carousalItems">
              <Link
                className={
                  "js-anchor-link flex cursor-pointer flex-col items-center"
                }
                href={item.id}
              >
                <Image
                  className="border-red"
                  src={item.sliderImg}
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

      {/* <div id="section-1" className=" h-96">
        <h1>Section 1</h1>
        <a href="#section-2" className="js-anchor-link">
          Go to section 2
        </a>
      </div>

      <div id="section-2" className="section h-96 bg-red-800">
        <MenuItem />
      </div>

      <div id="section-3" className="section h-96 bg-slate-600">
        <h1>Section 3</h1>
        <a href="#section-1" className="js-anchor-link">
          Back to section 1
        </a>
      </div> */}
      {/* <AnchorLink /> */}
    </div>
  );
};

export default MenuSlider;
