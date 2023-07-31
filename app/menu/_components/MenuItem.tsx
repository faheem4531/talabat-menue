'use client';
import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import QuantityCounter from '../../_components/QuantityCounter';
import fire from '../../_assets/svgs/fire.svg';
import emptyHeart from '../../_assets/svgs/emptyHeart.svg';
import fillHeart from '../../_assets/svgs/filledHeart.svg';
import { useAppSelector, useAppDispatch } from '@/app/_store/hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { addItem, removeItem } from '@/app/_store/reducers/cartReducer';
import { useTranslation } from 'react-i18next';
import { MenuItem } from "../../_lib/types/menu";

const MenuItem: FC<MenuItem> = ({
  id,
  itemsImg,
  title,
  discription,
  calerioes,
  price,
  additions,
  updatingFavorites,
  soldOut
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data }: { data: string[] } = useAppSelector(
    (state) => state.favorites
  );
  const { items } = useAppSelector((state) => state.cart);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const showToastMessage = (id: string) => {
    const result = data.find((item) => item === id);
    if (!result) {
        toast(`${t('toast.added-to-favorites')}!`, { type: 'success' })
    } else {
         toast(`${t('toast.removed-from-favorites')}!`, {type: 'error'})
    }
  };

  const soldOutToast = () => {
    toast(`${t('toast.item-sold-out')}!`, { type: 'warning' })
  }

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
            {title}
          </h3>
        </div>
        <h4 className="my-1 line-clamp-2 text-[8px] text-[#00000070] w-52">
          {discription}
        </h4>
        <div className="flex item-center ">
          <div className="mr-[3px]">
            <Image src={fire} alt="fire" />
          </div>
          <h4 className="font-extrabold text-darkBlue text-[8px]">
            {calerioes}
          </h4>
        </div>
        <div className="flex items-center">
          <span className="text-[11px] font-semibold text-[#C02328] ">
            {`${price} ${t("payment.SAR")}`}
          </span>
          <div onClick={handleItem}>
            {additions.length == 0 ? (
              <QuantityCounter
                color="text-white"
                bgColor="bg-[#C84044]"
                count={getQuantity(id)}
                delIconflag={true}
                incrementCounter={() => { !soldOut ? incrementCounter(id) : soldOutToast ()}}
                decrementCounter={() => decrementCounter(id)}
                actionType="increment"
              />
            ) : (
              <QuantityCounter
                color="text-white"
                bgColor="bg-[#C84044]"
                actionType="navigate"
                navigate={navigate}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mr-2.5 relative">
        <Image
          style={{
            minHeight: "84px",
            maxHeight: "84px",
            minWidth: "84px",
            maxWidth: "84px",
            borderRadius: 10,
            objectFit: "cover",
          }}
          width={400}
          height={300}
          alt="{menuItem?.name}"
          src={itemsImg}
        />
        <div
          onClick={(event) => {
            event.stopPropagation();
            updatingFavorites(id);
            showToastMessage(id);
          }}
        >
          {checkItemInFavorites(id) ? (
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
