'use client';
import SideNavbar from '../_components/SideNavbar/SideNavbar';
import Image from 'next/image';
import heroImg from '../_assets/pngs/heroImg.png';
import logo from '../_assets/svgs/logo.svg';
import searchIcon from '../_assets/pngs/inputSearch.png';
import FlagIcon from '../_assets/pngs/navFlag.png';
import locationIcon from '../_assets/svgs/location.svg';
import clock from '../_assets/svgs/clock.svg';
import CartWithItems from './_components/CartWithItems';
import Modal from '../_components/modal/Modal';
import { useAppDispatch, useAppSelector } from '../_store/hooks';
import { useEffect, useState } from 'react';
import { getMenuCatageorys } from '../_store/thunk/menuCatageory.thunk';
import { getRestaurants } from '../_store/thunk/restaurant.thunk';
import LocationModal from '../_components/modal/LocationModal';
import TimingModal from '../_components/modal/TimingModal';
import InputModal from '../_components/modal/InputModal';
import { setSelectedRestaurant } from '../_store/reducers/restaurantReducer';
import { useTranslation } from "react-i18next";

const Menu = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation()

  const { catagories }: { catagories: any } = useAppSelector(
    (state) => state.menuCatageory
  );
  const restaurants = useAppSelector(
    (state: any) => state.restaurant.data?.docs
  );

  const selectedRestaurant = useAppSelector(
    (state) => state.restaurant.selectedId
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hourModalOpen, setHourModalOpen] = useState(false);
  const [locModalOpen, setLocModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getMenuCatageorys());
    dispatch(getRestaurants());
    dispatch(setSelectedRestaurant('63f3021acafc472f2238e4c6'));
  }, [dispatch]);



  return (
    <div>
      <div className="h-64">
        <div className="flex justify-between p-4 items-center relative z-[1]">
          <div>
            <SideNavbar />
          </div>
          <div className="flex items-center">
            <div className="text-white font-semibold text-1xl">AR</div>
            <div className="ml-2">
              <Image src={FlagIcon} alt="FlagIcon" />
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
                  <h4 className="text-xs font-[400]">Gulf Madina </h4>
                  <div className="ml-[32px] text-[9px] font-[400] ">
                    Today : Open 24 Hours
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
                      Branches
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
          Category
        </h5>
        <CartWithItems categories={catagories ?? []} />
      </div>

      <Modal
        modalCSS="items-start"
        cancelCSS="right-0"
        modalPosition="items-start"
        isModalOpen={isModalOpen}
        handleModalToggle={() => setIsModalOpen(!isModalOpen)}
      >
        <InputModal />
      </Modal>

      {/* Hours Modal */}
      <Modal
        isModalOpen={hourModalOpen}
        handleModalToggle={() => setHourModalOpen(!hourModalOpen)}
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="w-[292px] rounded-[14px] pb-6"
      >
        <div>
          <TimingModal />
        </div>
      </Modal>

      {/* location modal */}
      <Modal
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="w-[292px] rounded-[14px] pb-6 px-4"
        isModalOpen={locModalOpen}
        handleModalToggle={() => setLocModalOpen(!locModalOpen)}
      >
        <div className="mt-[59px]">
          <LocationModal restaurants={restaurants} />
        </div>
      </Modal>
    </div>
  );
};
export default Menu;
function typeOf(restaurants: any): any {
  throw new Error('Function not implemented.');
}
