"use client";
import React, { useEffect, useState } from "react";
import SideNavbar from "../_components/SideNavbar/SideNavbar";
import Image from "next/image";
import FlagIcon from "../_assets/pngs/navFlag.png";
import CartItem from "./_components/cartItem";
import CartBtn from "../_components/Buttons/cartBtn";
import { useAppDispatch, useAppSelector } from '../_store/hooks';
import { getCartItems } from '../_store/thunk/cart.thunk';
import { addItem, removeItem } from '../_store/reducers/cartReducer';
import Modal from '../_components/modal/Modal';
import LoginModal from '../_components/modal/LoginModal';

const AddCart = () => {

  const dispatch = useAppDispatch();
  const { items, cart, loading } = useAppSelector((state) => state.cart);
  const customerData = useAppSelector((state) => state.customer.data);
  const allItems = useAppSelector((state) => state.menuCatageory.catagories).flatMap((obj) => obj.docs);
  const [update, setUpdate] = useState(false)
  const selectedRestaurant = useAppSelector(
    (state) => state.restaurant.selectedId
  );
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getCartItems({
      items,
      couponCode: '',
      orderType: 'Pickup',
      restaurantId: selectedRestaurant,
      source: 'Website',
      deliveryAddress: {}
    }))
  }, [dispatch, update])

  const getItemData = (id: string) => {
    const item = allItems.find(item => item._id == id);
    return {
      image: item?.image,
      price: item?.price,
      name: item?.name,
    }
  }

  const incrementCounter = (id: string) => {
    dispatch(addItem({
      additions: [],
      notes: '',
      quantity: 1,
      menuItem: {
        menuItemId: id
      }
    }))
    setUpdate(prev => !prev)
  };

  const decrementCounter = (id: string) => {
    dispatch(removeItem({ id }))
    setUpdate(prev => !prev)
  };

  const getQuantity = (id: string) => {
    const product = items.find(item => item?.menuItem?.menuItemId == id);
    if (product) {
      return product.quantity
    } else {
      return 0
    }
  }

  const calculatePrice = () => {
    let price = 0;

    items?.forEach(item => {
      price = (price + getItemData(item?.menuItem?.menuItemId)?.price) * item?.quantity;
    })

    return price;
  }

  const calculateTax = () => {
    const taxRate = cart?.taxRate ?? 0;
    let tax = calculatePrice() * taxRate / 100
    return tax
  }

  const handleConfirmOrder = () => {
    if (customerData) {
      setisLoginModalOpen(true)
    }
  }


  return (
    <div>
      <div className="flex justify-between p-4 items-center relative z-[1]">
        <div>
          <SideNavbar hamBurgerIcon={true} />
        </div>
        <div className="flex items-center">
          <div className="text-[#C84044] font-semibold text-1xl">AR</div>
          <div className="ml-2">
            <Image src={FlagIcon} alt="FlagIcon" />
          </div>
        </div>
      </div>
      <div className="mt-[30px] cartItemsMain">
        {cart?.items?.map((item: any, index: number) => {
          return (
            <CartItem
              key={index}
              title={getItemData(item.menuItem.menuItemId)?.name}
              price={item?.amountBeforeDiscount}
              cartImg={getItemData(item.menuItem.menuItemId)?.image}
              incrementCounter={() => incrementCounter(item.menuItem.menuItemId)}
              decrementCounter={() => decrementCounter(item.menuItem.menuItemId)}
              count={getQuantity(item.menuItem.menuItemId)}
            />
          );
        })}
      </div>
      <div
        className="h-[191px] w-full bg-[#C02328] rounded-lg pt-5 pb-1 px-2"
        style={{
          boxShadow: " 0px 2.5px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex gap-4 ml-[41px]">
          <div className="w-[130px] h-[38px] bg-[#F5866B] rounded-lg text-[15px] font-[400] px-[8px] py-2 text-white">
            Have a coupon?
          </div>
          <input className="w-[130px] h-[38px] bg-white rounded-lg px-3" />
          <button className="w-[38px] h-[38px] rounded-full bg-[#F5866B] text-[14px] font-[400] px-[4px] py-2 text-white">
            ADD
          </button>
        </div>
        <div className="flex gap-5 justify-center mt-[18px]">
          <div className="text-[15px] font-[400] pr-3 text-white">
            <div className="mr-4">Subtotal:</div>
            <div className="mt-[9px]">TAX:</div>
          </div>

          <div className="text-[15px] font-[400] pr-3 text-white">
            <div>{cart?.summary?.totalTaxableAmount} SAR</div>
            <div className="mt-[9px]">{cart?.summary?.totalTax} SAR</div>
          </div>
        </div>
        <div className="flex justify-between mt-[35.5px]">
          <div className="text-[15px] font-[400] text-white">Total</div>
          <div className="text-[15px] font-[400] pr-1 text-white">{cart?.summary?.totalWithTax} SAR</div>
        </div>
      </div>
      <div className="px-2 mt-[53px] mb-6" onClick={handleConfirmOrder}>
        <CartBtn
          btnText1="Confirm Order"
          btnClasses="justify-center rounded-[6px] bg-[#C02328] w-full text-[14px] font-[400] py-[15px]"
        />
      </div>
      <Modal
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="w-[292px] rounded-[14px] pb-6 px-4"
        isModalOpen={isLoginModalOpen}
        handleModalToggle={() => setisLoginModalOpen(!isLoginModalOpen)}
      >
        <div className="mt-[59px]">
          <LoginModal />
        </div>
      </Modal>
    </div>
  );
};

export default AddCart;
