'use client';
import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';
import Link from 'next/link';

import ItemCustomizer from './_components/ItemCustomizer';
import QuantityCounter from '../_components/QuantityCounter';
import Addbtn from '../_components/Buttons/cartBtn';
import { useAppDispatch, useAppSelector } from '../_store/hooks';
import { getItem } from '../_store/thunk/item.thunk';
import { addItem, removeItem } from '../_store/reducers/cartReducer';
import { updateLanguage } from '../_store/reducers/languageReducer';
import { ItemsDetail, AddOption, Additions } from '../_lib/types/itemsDetails';

import heroImg from '../_assets/pngs/detailHeroImg.png';
import FlagIcon from '../_assets/pngs/navFlag.png';
import USAFlagIcon from '../_assets/pngs/usaFlag.png';
import fire from '../_assets/svgs/fire.svg';
import backArrow from '../_assets/svgs/arrow-back.svg';

const ItemsDetail: FC<ItemsDetail | any> = ({ params }) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.item);
  const [itemId, setItemId] = useState<string>(params?.itemsDetail[1] ?? '');
  const cartItems = useAppSelector((state) => state.cart.items);
  const [price, setPrice] = useState<number>(data?.price ?? 0);
  const [addOns, setAddOns] = useState<any[]>([]);
  const [notes, setNotes] = useState('');
  const { t, i18n } = useTranslation();
  const language = useAppSelector((state: any) => state.language);
  const handleLanguageChange = () => {
    i18n.changeLanguage(language.name);
  };

  const addOption = (item: AddOption) => {

    setAddOns((prevAddOns) => {
      const updatedAddOns = [...prevAddOns];
      const existingAddOnIndex = updatedAddOns.findIndex((addOn) => addOn.menuAdditionId === item.addOnId);

      if (existingAddOnIndex !== -1) {
        const existingAddOn = updatedAddOns[existingAddOnIndex];

        if (item.multiple) {
          // Toggle optionId (remove it if it exists)
          const existingOptionIndex = existingAddOn.options.findIndex((option: { optionId: string; }) => option.optionId === item.optionId);

          if (existingOptionIndex !== -1) {
            existingAddOn.options.splice(existingOptionIndex, 1);
          } else {
            existingAddOn.options.push({ optionId: item.optionId });
          }

          // Remove the entire addOn if no options are left
          if (existingAddOn.options.length === 0) {
            updatedAddOns.splice(existingAddOnIndex, 1);
          }
        } else {
          // Replace options with the new option
          existingAddOn.options = [{ optionId: item.optionId }];
        }
      } else {
        // Add a new addOn with optionId
        updatedAddOns.push({ menuAdditionId: item.addOnId, options: [{ optionId: item.optionId }] });
      }

      return updatedAddOns;
    });
  };

  const isChecked = (addOnId: string, optionId: string) => {
    return addOns.some(
      (addOn) => addOn.menuAdditionId === addOnId && addOn.options.some((option: { optionId: string; }) => option.optionId === optionId)
    );
  };

  const getQuantity = (id: string) => {
    const product = cartItems?.find((item) => item?.menuItem?.menuItemId == id);
    if (product) {
      return product.quantity;
    } else {
      return 1
    }
  }
  const [quantity, setQuantity] = useState(getQuantity(data?._id) ?? 1);

  useEffect(() => {
    dispatch(getItem(itemId));
  }, [itemId, dispatch]);

  const incrementCounter = () => {
    setQuantity((prev: number) => {
      return prev + 1;
    });
  };

  const decrementCounter = () => {
    setQuantity((prev: number) => --prev);
  };

  // const updateOptions = (menuAdditionId: string, options: []) => {
  //   setAddOns((prev) => [...prev, { menuAdditionId, options }]);
  // };

  const addItemToCart = () => {
    dispatch(
      addItem({
        additions: addOns,
        notes,
        quantity,
        menuItem: {
          menuItemId: data?._id,
        },
      })
    );
  };

  const getOptionPrice = (optionId: string) => {
    const allOptions = data?.additions?.flatMap((obj: { options: any; }) => obj?.options);
    const option = allOptions.find((option: { _id: string; }) => option?._id === optionId)
    return option?.price ?? 0
  }

  const calculatePrice = () => {
    let p = price;
    const selected = addOns?.flatMap((obj) => obj?.options);
    selected.forEach(element => {
      p = p + getOptionPrice(element.optionId);
    })
    return p * quantity
  }

  return (
    <div>
      <div className="flex justify-between p-4 items-center relative z-[1]">
        <Link href={'/'}>
          {/* <SideNavbar /> */}
          <Image src={backArrow} alt="backArrow" />
        </Link>

        <div
              className="cursor-pointer flex items-center"
              onClick={() => {
                language.name === "en"? dispatch(updateLanguage('ar')) : dispatch(updateLanguage('en'));
                handleLanguageChange();
              }}
            >
              <div className="text-black font-semibold text-1xl">{language.name === "en" ? "EN" : "AR"}</div>
              <div className="ml-2">
                <Image src={language.name==="en"? USAFlagIcon : FlagIcon} alt="FlagIcon" width={27} />
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
          {(data?.additions ?? []).map((item: Additions, index: number) => {

            return (
              <ItemCustomizer
                title={item.name}
                id={item._id}
                key={index}
                options={item?.options ?? []}
                addOption={addOption}
                multiple={item?.isMultipleAllowed}
                isChecked={isChecked}
              />
            );
          })}
        </div>
        <div>
          <h5 className="text-sm font-semibold my-[18px]">{t("productDetail.write-note")}</h5>
          <textarea
            className="h-28 w-full rounded-[10px] border-[1px] border-[#E0E0E0] p-3 text-[11px] placeholder-[#00000036]"
            name="comment"
            form="usrform"
            placeholder={t("productDetail.type-your-comment")}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        <div className="h-9 flex justify-between items-center mt-[52px] mb-[25px]">
          <div className="w-[180px]">
            <QuantityCounter
              color="text-black p-1"
              bgColor="bg-white"
              count={quantity}
              incrementCounter={incrementCounter}
              decrementCounter={decrementCounter} 
              actionType={'increment'}
              // delIconflag={true}
            />
          </div>
          <div>
            <Link href={'/addCart'} onClick={addItemToCart}>
              <Addbtn
                btnText1={t("productDetail.add")}
                btnText2={`${calculatePrice()} SAR`}
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
