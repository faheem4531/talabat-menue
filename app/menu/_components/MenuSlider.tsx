"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../../_assets/pngs/heroImg.png";
import AnchorLink from "@/app/_components/AnchorLink";
import MenuItem from "./MenuItem";

const MenuSlider = () => {
  // const { t, lang } = useTranslation("menu");

  return (
    <div>
      <div className="mainCarousal">
        {/* {categories?.map((category) => {
        if (categroyObj?.hasOwnProperty(category?.name) || !categroyObj) {
          return (
            <div key={category?._id} className="carousalItems">
              <Link
                className={
                  "js-anchor-link flex cursor-pointer flex-col items-center opacity-40 " +
                  " " +
                  (inView && inView[0] == category?._id ? " !opacity-100" : "")
                }
                href={`#${category?.name
                  ?.replace(/\s/g, "")
                  .replace(/[^\w\s]/gi, "")}`}
                data-to-scrollspy-id={category?.name
                  ?.replace(/\s/g, "")
                  .replace(/[^\w\s]/gi, "")}
                scroll={true}
              >
                <Image
                  className="rounded-full border-2 border-red"
                  src={
                    category?.image
                      ? category?.image
                      : "https://gti-menu-files.s3.amazonaws.com/63d325e7070c6883f8d3b808/images/restaurant%20Placeholder-33700e2e.png"
                  }
                  alt={category?.name}
                  width={67}
                  height={67}
                  style={{
                    borderRadius: "50%",
                    minWidth: "67px",
                    minHeight: "67px",
                    objectFit: "cover",
                    maxWidth: "67px",
                    maxHeight: "67px",
                  }}
                />{" "}
                <span className="whitespace-pre text-[11px] mt-1 font-medium text-[#6D6A75]">
                  {lang === "ar" ? category?.nameAr : category?.name}
                </span>
              </Link>
              <AnchorLink />
            </div>
          );
        }
      })} */}
        <div className="carousalItems">
          <Link
            className={
              "js-anchor-link flex cursor-pointer flex-col items-center"

              // (inView && inView[0] == category?._id ? " !opacity-100" : "")
            }
            href="#section-1"
            // {`#${category?.name
            //   ?.replace(/\s/g, "")
            //   .replace(/[^\w\s]/gi, "")}`}
            // data-to-scrollspy-id={category?.name
            //   ?.replace(/\s/g, "")
            //   .replace(/[^\w\s]/gi, "")}
            // scroll={true}
          >
            <Image
              className="border-red"
              src={img}
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
              {/* {lang === "ar" ? category?.nameAr : category?.name} */}
              SPRITE
            </span>
          </Link>

          {/* <AnchorLink /> */}
        </div>
        <div className="carousalItems">
          <Link
            className={
              "js-anchor-link flex cursor-pointer flex-col items-center opacity-40 "

              // (inView && inView[0] == category?._id ? " !opacity-100" : "")
            }
            href="#section-2"
            // {`#${category?.name
            //   ?.replace(/\s/g, "")
            //   .replace(/[^\w\s]/gi, "")}`}
            // data-to-scrollspy-id={category?.name
            //   ?.replace(/\s/g, "")
            //   .replace(/[^\w\s]/gi, "")}
            // scroll={true}
          >
            <Image
              className="border-red"
              src={img}
              alt="{category?.name}"
              width={74}
              height={71}
              style={{
                borderRadius: "8px",
                minWidth: "74px",
                minHeight: "71px",
                objectFit: "cover",
                maxWidth: "74px",
                maxHeight: "71px",
              }}
            />
            <span className="whitespace-pre text-[11px] mt-1 font-medium text-[#6D6A75]">
              {/* {lang === "ar" ? category?.nameAr : category?.name} */}
              SPRITE
            </span>
          </Link>

          {/* <AnchorLink /> */}
        </div>
        <div className="carousalItems">
          <Link
            className={
              "js-anchor-link flex cursor-pointer flex-col items-center opacity-40 "

              // (inView && inView[0] == category?._id ? " !opacity-100" : "")
            }
            href="#section-3"
            // {`#${category?.name
            //   ?.replace(/\s/g, "")
            //   .replace(/[^\w\s]/gi, "")}`}
            // data-to-scrollspy-id={category?.name
            //   ?.replace(/\s/g, "")
            //   .replace(/[^\w\s]/gi, "")}
            // scroll={true}
          >
            <Image
              className="border-red"
              src={img}
              alt="{category?.name}"
              width={74}
              height={71}
              style={{
                borderRadius: "8px",
                minWidth: "74px",
                minHeight: "71px",
                objectFit: "cover",
                maxWidth: "74px",
                maxHeight: "71px",
              }}
            />
            <span className="whitespace-pre text-[11px] mt-1 font-medium text-[#6D6A75]">
              {/* {lang === "ar" ? category?.nameAr : category?.name} */}
              SPRITE
            </span>
          </Link>

          {/* <AnchorLink /> */}
        </div>
        <div className="carousalItems">
          <Link
            className={
              "js-anchor-link flex cursor-pointer flex-col items-center opacity-40 "

              // (inView && inView[0] == category?._id ? " !opacity-100" : "")
            }
            href=""
            // {`#${category?.name
            //   ?.replace(/\s/g, "")
            //   .replace(/[^\w\s]/gi, "")}`}
            // data-to-scrollspy-id={category?.name
            //   ?.replace(/\s/g, "")
            //   .replace(/[^\w\s]/gi, "")}
            // scroll={true}
          >
            <Image
              className="border-red"
              src={img}
              alt="{category?.name}"
              width={74}
              height={71}
              style={{
                borderRadius: "8px",
                minWidth: "74px",
                minHeight: "71px",
                objectFit: "cover",
                maxWidth: "74px",
                maxHeight: "71px",
              }}
            />
            <span className="whitespace-pre text-[11px] mt-1 font-medium text-[#6D6A75]">
              {/* {lang === "ar" ? category?.nameAr : category?.name} */}
              SPRITE
            </span>
          </Link>

          {/* <AnchorLink /> */}
        </div>
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
      <AnchorLink />
    </div>
  );
};

export default MenuSlider;
