'use client';
import SideNavbar from '../_components/SideNavbar/SideNavbar';
import Image from 'next/image';
import heroImg from '../_assets/pngs/heroImg.png';
import inputHamburger from '../_assets/pngs/inputBurger.png';
import searchIcon from '../_assets/pngs/inputSearch.png';
import FlagIcon from '../_assets/pngs/navFlag.png';
import CartWithItems from './_components/CartWithItems';
import { useAppDispatch, useAppSelector } from '../_store/hooks';
import { useEffect } from 'react';
import {
  getMenuCatageorys,
  getCatageorysWithItems,
} from '../_store/thunk/menuCatageory.thunk';
import { clearCatagories } from '../_store/reducers/menuCatageory';

export default function Test() {
  const dispatch = useAppDispatch();
  const { data, catagories }: { data: any, catagories: any } = useAppSelector((state) => state.menuCatageory);
  const { docs }: { docs: any } = { ...data };

  console.log(catagories, 'catagories');

  useEffect(() => {
    dispatch(getMenuCatageorys());
    dispatch(clearCatagories());
    docs &&
      docs.length &&
      docs.map((category: any) =>
        dispatch(getCatageorysWithItems(category))
      );
  }, [dispatch]);

  return (
    <div>
      <div className="h-64">
        <div className="flex justify-between p-4 items-center relative z-[1]">
          <div>
            <SideNavbar />
          </div>
          <div className="flex items-center">
            <div className="text-white text-1xl">Ar</div>
            <div className="ml-2">
              <Image src={FlagIcon} alt="FlagIcon" />
            </div>
          </div>
        </div>
        <div className="h-64 absolute top-0 z-[-1] heroImgMain">
          <Image
            src={heroImg}
            alt="Restaurant Placeholder"
            className="heroImg"
          />
        </div>
        <div className="z-10">
          <div className="relative top-[162px] flex w-[365px] m-auto">
            {/* <AiOutlineSearch className="absolute bottom-5 left-[12px] top-1/2 h-5 w-5 -translate-y-1/2 transform fill-[#57606E]" /> */}
            <Image
              src={searchIcon}
              alt="hamburger-menu-icon"
              className="absolute bottom-5 left-[17px] top-1/2 h-3 w-3 -translate-y-1/2 transform "
            />
            <input
              // ref={searchRef}
              className=" h-[33px] w-full rounded-5px border border-transparent px-10  text-xs font-sm shadow-10 transition-all duration-300 ease-in-out focus:border-red focus:outline-none rounded-[3px] shadow-lg text-black placeholder-black"
              placeholder="What are you looking for"
              // placeholder={t("lookingFor")}
              // onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                boxShadow: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
            <Image
              src={inputHamburger}
              alt="hamburger-menu-icon"
              className="absolute bottom-5 right-[12px] top-2.5 h-3 w-3 "
            />
          </div>
        </div>
      </div>
      <div className="mt-[39px] ml-[15px] font-semibold">
        <h5 className="text-sm text-[#494949] font-semibold mb-[14px]">
          Category
        </h5>
        <CartWithItems
          categories={catagories ?? []}
        />
      </div>
    </div>
  );
}
