'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import heroImg from '../../_assets/pngs/heroImg.png';
import QuantityCounter from '../../_components/QuantityCounter';
import fire from '../../_assets/svgs/fire.svg';
import emptyHeart from '../../_assets/svgs/emptyHeart.svg';
import fillHeart from '../../_assets/svgs/filledHeart.svg';
import { useAppSelector, useAppDispatch } from '@/app/_store/hooks';
import { updateFavorites } from '@/app/_store/reducers/favoritesReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { addItem, removeItem } from '@/app/_store/reducers/cartReducer';

const MenuItem = ({
  id,
  itemsImg,
  title,
  discription,
  calerioes,
  price,
  additions
}: any) => {
  
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data }: { data: string[] } = useAppSelector(
    (state) => state.favorites
  );
  const { items } = useAppSelector((state) => state.cart);

  const showToastMessage = (id: string) => {
    const result = data.find((item) => item === id);
    if (result === undefined) {
      toast.success('Added to Favorites!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error('Removed from Favorites!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const updatingFavorites = () => {
    dispatch(updateFavorites(id));
  };

  const handleItem = (event: any) => {
    event.stopPropagation();
  };

  const checkItemInFavorites = (id: string) => {
    const result = data.find((item) => item === id);
    if (result !== undefined) {
      return false;
    } else {
      return true;
    }
  };

  const getQuantity = (id: string) => {
    const product = items?.find((item) => item?.menuItem?.menuItemId == id);
    if (product) {
      return product.quantity;
    } else {
      return 0;
    }
  };

  const incrementCounter = (id: string) => {
    dispatch(
      addItem({
        additions: [],
        notes: '',
        quantity: 1,
        menuItem: {
          menuItemId: id,
        },
      })
    );
  };

  const decrementCounter = (id: string) => {
    dispatch(removeItem({ id }));
  };

  const navigate = () => {
    router.push(`/itemsDetail/${id}`);
  };

  return (
    <div
      className="content relative flex cursor-pointer border-b-[1px] border-[#0000000f] p-[14px] pt-[9px] shadow-4 pb-4"
      onClick={navigate}
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
            {additions.length == 0 && (
              <QuantityCounter
                color="text-white"
                bgColor="bg-[#C84044]"
                count={getQuantity(id)}
                delIconflag={true}
                incrementCounter={() => incrementCounter(id)}
                decrementCounter={() => decrementCounter(id)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mr-2.5 relative">
        <Image
          style={{
            minHeight: '84px',
            maxHeight: '84px',
            minWidth: '84px',
            maxWidth: '84px',
            borderRadius: 10,
            objectFit: 'cover',
          }}
          width={400}
          height={300}
          alt="{menuItem?.name}"
          src={itemsImg}
        />
        <div
          onClick={(event) => {
            event.stopPropagation();
            updatingFavorites();
            showToastMessage(id);
          }}
        >
          {!checkItemInFavorites(id) ? (
            <>
              <Image
                src={emptyHeart}
                alt="emptyHeartIcon"
                className="absolute bottom-[-18px] right-[-12px]"
              />
              <ToastContainer autoClose={2000} theme="colored" />
            </>
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
