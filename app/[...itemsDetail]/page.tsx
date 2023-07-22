'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroImg from "../_assets/pngs/detailHeroImg.png";
import FlagIcon from "../_assets/pngs/navFlag.png";
import fire from "../_assets/svgs/fire.svg";
import ItemCustomizer from "./_components/ItemCustomizer";
import QuantityCounter from "../_components/QuantityCounter";
import Addbtn from "../_components/Buttons/cartBtn";
import backArrow from "../_assets/svgs/arrow-back.svg";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from '../_store/hooks';
import { getItem } from '../_store/thunk/item.thunk';

const ItemsDetail = ({ params }: any) => {

  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.item)
  const [itemId, setItemId] = useState<string>(params?.itemsDetail[1] ?? '');

  useEffect(() => {
    dispatch(getItem(itemId))
  }, [itemId, dispatch])

  return (
    <div>
      <div className="flex justify-between p-4 items-center relative z-[1]">
        <Link href={"/"}>
          {/* <SideNavbar /> */}
          <Image src={backArrow} alt="backArrow" />
        </Link>
        <div className="flex items-center">
          <div className="text-[#C84044] text-1xl">Ar</div>
          <div className="ml-2">
            <Image src={FlagIcon} alt="FlagIcon" />
          </div>
        </div>
      </div>
      <div className="h-64">
        <div className="h-64 absolute heroImgMain">
          <Image
            src={data?.image ?? heroImg}
            alt="Restaurant Placeholder"
            className="heroImg"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="px-4">
        <div>
          <div className="border-t-[1px] border-[#0000000f] pt-2">
            <h4 className="text-[15px] font-[500] mb-[11px] tracking-wide">
              {data?.name ?? ''}
            </h4>
            <div className="text-[9px] font-[500] text-[#00000070]">

              <div>{data?.description ?? ''}</div>
              {/* <div className="mt-1">1 garlic clove, crushed</div> */}
              {/* <div className="mt-1">2 spring onions 1 medium tomato</div> */}
            </div>
            <div className="flex item-center mt-1">
              <div className="mr-[3px]">
                <Image src={fire} alt="fire" />
              </div>
              <h4 className="font-extrabold text-darkBlue text-[8px]">
                {/* {menuItem.calories} */}
                {data?.calories ?? 0} cal
              </h4>
            </div>
          </div>
        </div>
        <div>
          {(data?.additions ?? []).map((item: any, index: number) => {
            return (
              <ItemCustomizer title={item.name} id={item.id} key={index} options={item?.options ?? []} />
            );
          })}
        </div>
        <div>
          <h5 className="text-sm font-semibold my-[18px]">Write Note</h5>
          <textarea
            className="h-28 w-full rounded-[10px] border-[1px] border-[#E0E0E0] p-3 text-[11px] placeholder-[#00000036]"
            name="comment"
            form="usrform"
            placeholder="Type Your Comment"
          ></textarea>
        </div>
        <div className="h-9 flex justify-between items-center mt-[52px] mb-[25px]">
          <div className="w-[180px]">
            <QuantityCounter
              color="text-black p-1"
              bgColor="bg-white"
              count={1}
            // delIconflag={true}
            />
          </div>
          <div>
            <Link href={"/addCart"}>
              <Addbtn
                btnText1="Add"
                btnText2="96.00 SR"
                btnline={true}
                btnClasses=" justify-around rounded-lg px-4 py-2 mr-2 mb-2 bg-[#C02328] w-[152px] h-[33px] text-[12px] font-semibold"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsDetail;
