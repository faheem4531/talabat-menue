'use client';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '../_store/hooks';
import { getCartItems } from '../_store/thunk/cart.thunk';
import { getRestaurants } from '../_store/thunk/restaurant.thunk';
import { getMenuCatageorys } from '../_store/thunk/menuCatageory.thunk';
import { updateLanguage } from '../_store/reducers/languageReducer';
import { setSelectedRestaurant } from '../_store/reducers/restaurantReducer';
import { updateFavorites } from '../_store/reducers/favoritesReducer'; 
import { Menu } from '../_lib/types/menu';
import { Catagories } from "../_lib/types/menu";
import SideNavbar from '../_components/SideNavbar/SideNavbar';
import CartWithItems from './_components/CartWithItems';
import Modal from '../_components/modal/Modal';
import LocationModal from '../_components/modal/LocationModal';
import TimingModal from '../_components/modal/TimingModal';
import InputModal from '../_components/modal/InputModal';

import logo from '../_assets/svgs/logo.svg';
import clock from '../_assets/svgs/clock.svg';
import locationIcon from '../_assets/svgs/location.svg';
import heroImg from '../_assets/pngs/heroImg.png';
import FlagIcon from '../_assets/pngs/navFlag.png';
import USAFlagIcon from '../_assets/pngs/usaFlag.png';
import searchIcon from '../_assets/pngs/inputSearch.png';

const Menu: FC<Menu> = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();

  const { catagories }: Catagories = useAppSelector((state) => state.menuCatageory);
  const restaurants = useAppSelector((state: any) => state.restaurant?.data?.docs);
  const { cart, items } = useAppSelector((state) => state.cart);

  const selectedRestaurant: any = useAppSelector(
    (state: any) => state.restaurant.selectedRestaurant
  );
  const defaultRestaurant = restaurants?.find((item: { _id: string; }) => item._id === "63f3021acafc472f2238e4c6")
  const language = useAppSelector((state: any) => state.language);
  
  const [query, setQuery] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hourModalOpen, setHourModalOpen] = useState<boolean>(false);
  const [locModalOpen, setLocModalOpen] = useState<boolean>(false);
  useEffect(() => {
    if (!catagories.length) {
      dispatch(getMenuCatageorys());
    }
    dispatch(getRestaurants());
    if(!selectedRestaurant){dispatch(setSelectedRestaurant(defaultRestaurant));}
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getCartItems({
        items,
        couponCode: "",
        orderType: "Pickup",
        restaurantId: selectedRestaurant?._id,
        source: "Website",
        deliveryAddress: {},
      })
    );
  }, [dispatch, items]);

  const handleLanguageChange = () => {
    i18n.changeLanguage(language.name);
  };
  const updatingFavorites = (id:string) => {
    dispatch(updateFavorites(id));
  };

  return (
    <div>
      <div className="h-64">
        <div className="flex justify-between p-4 items-center relative z-[1]">
          <div>
            <SideNavbar />
          </div>
          <div
              className="cursor-pointer flex items-center"
              onClick={() => {
                language.name === "en"? dispatch(updateLanguage('ar')) : dispatch(updateLanguage('en'));
                handleLanguageChange();
              }}
            >
              <div className="text-white font-semibold text-1xl">{language.name === "en" ? "EN" : "AR"}</div>
              <div className="ml-2">
                <Image src={language.name==="en"? USAFlagIcon : FlagIcon} alt="FlagIcon" width={27} />
              </div>
            </div>
        </div>
        <div className="h-64 absolute top-0 z-[-1] heroImgMain">
          <Image
            priority={true}
            src={heroImg}
            alt="Restaurant Placeholder"
            className="heroImg"
          />
        </div>
        <div className="z-10">
          <div className="relative top-[130px] flex w-[365px] m-auto">
            {/* <AiOutlineSearch className="absolute bottom-5 left-[12px] top-1/2 h-5 w-5 -translate-y-1/2 transform fill-[#57606E]" /> */}

            <div
              className="bg-white flex h-[71px] w-full rounded-5px border border-transparent px-2 py-[10px] text-xs font-sm shadow-10 transition-all duration-300 ease-in-out focus:border-red focus:outline-none rounded-[3px] shadow-lg text-black placeholder-black"
              style={{
                boxShadow: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              <Image
                src={logo}
                alt="hamburger-menu-icon"
                className=" h-[51px] w-12 mr-[14px]"
                width={400}
                height={300}
              />
              <div>
                <div className="flex mt-1">
                  <h4 className="text-xs font-[400]">
                  {selectedRestaurant?.name}
                  </h4>
                  <div className="ml-[32px] text-[9px] font-[400] ">
                    {t('menu.today-open-24-hours')}
                  </div>
                </div>
                <div className="flex mt-[14px]">
                  <div
                    className="flex gap-3 cursor-pointer"
                    onClick={() => setHourModalOpen(true)}
                  >
                    <h4 className="text-[9px] font-[400] text-black ">
                      {t('menu.opening-hours')}
                    </h4>
                    <Image
                      src={clock}
                      alt="hamburger-menu-icon"
                      className="cursor-pointer  w-3 h-[14px] "
                    />
                  </div>
                  <div
                    className="flex gap-3 cursor-pointer"
                    onClick={() => setLocModalOpen(true)}
                  >
                    <div className="ml-[32px] text-[9px] font-[400] text-black cursor-pointer">
                      {selectedRestaurant?.name}
                    </div>
                    <Image
                      src={locationIcon}
                      alt="hamburger-menu-icon"
                      className="cursor-pointer  w-3 h-[14px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={searchIcon}
              alt="hamburger-menu-icon"
              className="cursor-pointer absolute bottom-5 right-[17px] top-1/2 h-3 w-3 -translate-y-1/2 transform "
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <div className="mt-[39px] ml-[15px] font-semibold pb-10">
        <h5 className="text-sm text-[#494949] font-semibold mb-[14px]">
          {t("menu.category")}
        </h5>
        <CartWithItems categories={catagories ?? []} query={query} cart={cart} updatingFavorites={updatingFavorites} />
      </div>

      <Modal
        modalCSS="items-start rounded-[14px] pb-6"
        cancelCSS="right-0"
        modalPosition="items-start"
        isModalOpen={isModalOpen}
        handleModalToggle={() => setIsModalOpen(!isModalOpen)}
      >
        <InputModal setQuery={setQuery} />
      </Modal>

      {/* Hours Modal */}
      <Modal
        isModalOpen={hourModalOpen}
        handleModalToggle={() => setHourModalOpen(!hourModalOpen)}
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="rounded-[14px] pb-6"
      >
        <div>
          <TimingModal />
        </div>
      </Modal>

      {/* location modal */}
      <Modal
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS=" rounded-[14px] pb-6 px-4"
        isModalOpen={locModalOpen}
        handleModalToggle={() => setLocModalOpen(!locModalOpen)}
      >
        <div className="mt-[59px]">
          <LocationModal
            restaurants={restaurants}
            setLocModalOpen={setLocModalOpen}
          />
        </div>
      </Modal>
    </div>
  );
};
export default Menu;
