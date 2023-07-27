import React from "react";
import type { FC } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import MenuSlider from "./MenuSlider";
import MenuItemsContainer from "./MenuItemsContainer";
import CartBtn from "../../_components/Buttons/cartBtn";
import { CartWithItems } from "../../_lib/types/menu";

const CartWithItems: FC<CartWithItems> = ({
  categories,
  query,
  cart,
  
  updatingFavorites
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div>
      <MenuSlider />
      {categories.map((element, index) => {
        return (
          <div key={index} className="pb-6">
            <MenuItemsContainer
              key={index}
              title={element?.name}
              id={element?._id}
              items={element?.docs ?? []}
              query={query}
              updatingFavorites={updatingFavorites}
            />
          </div>
        );
      })}
      <Link href={"/addCart"} className="fixed bottom-2 w-[350px]">
        <CartBtn
          btnText1={t("cart.View-Cart")}
          btnText2={`${cart?.summary?.totalWithTax ?? 0} ${t("payment.SAR")}`}
          // onClick={}
          btnClasses="justify-between px-4 rounded-[6px] bg-[#00A559] w-full text-[14px] font-[400] py-[15px]"
        />
      </Link>
    </div>
  );
};

export default CartWithItems;
