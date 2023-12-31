"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';

import Image from "next/image";
import { useRouter } from "next/navigation";

import { updateLanguage } from '../_store/reducers/languageReducer';
import { useAppDispatch, useAppSelector } from "../_store/hooks";
import { getCartItems } from "../_store/thunk/cart.thunk";
import { order, takePayment } from "../_store/thunk/order";
import { addItem, clearCart, removeItem } from "../_store/reducers/cartReducer";
import {
  phoneNumberExists,
  requestOtp,
  confirmOtp,
} from "../_store/thunk/user"; import OTPModal from "../_components/modal/OTPModal";
import SideNavbar from "../_components/SideNavbar/SideNavbar";
import CartItem from "./_components/cartItem";
import CartBtn from "../_components/Buttons/cartBtn";
import Modal from "../_components/modal/Modal";
import LoginModal from "../_components/modal/LoginModal";

import FlagIcon from "../_assets/pngs/navFlag.png";
import USAFlagIcon from '../_assets/pngs/usaFlag.png';

const AddCart = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items, cart, loading } = useAppSelector((state) => state.cart);
  const customerData = useAppSelector((state) => state.customer.data);
  const allItems = useAppSelector(
    (state) => state.menuCatageory.catagories
  ).flatMap((obj) => obj.docs);
  const selectedRestaurant = useAppSelector(
    (state) => state.restaurant.selectedRestaurant
  );
  const [update, setUpdate] = useState<boolean>(false);
  const [isLoginModalOpen, setisLoginModalOpen] = useState<boolean>(false);
  const [termsAndConditionsModal, setTermsAndConditionsModal] = useState<boolean>(false);
  const [paymentMethodModal, setPaymentMethodModal] = useState<boolean>(false);
  const [otpModalOpen, setOtpModalOpen] = useState<boolean>(false);
  const [verificationId, setVerificationId] = useState<number>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const { t, i18n } = useTranslation();
  const language = useAppSelector((state: any) => state.language);
  const handleLanguageChange = () => {
    i18n.changeLanguage(language.name);
  };

  useEffect(() => {
    dispatch(
      getCartItems({
        items,
        couponCode: "",
        orderType: "Pickup",
        restaurantId: selectedRestaurant._id,
        source: "Website",
        deliveryAddress: {},
      })
    );
  }, [dispatch, update]);

  const getItemData = (id: string) => {
    const item = allItems.find((item) => item._id == id);
    return {
      image: item?.image,
      price: item?.price,
      name: item?.name,
    };
  };

  const incrementCounter = (id: string) => {
    dispatch(
      addItem({
        additions: [],
        notes: "",
        quantity: 1,
        menuItem: {
          menuItemId: id,
        },
      })
    );
    setUpdate((prev) => !prev);
  };

  const decrementCounter = (id: string) => {
    dispatch(removeItem({ id }));
    setUpdate((prev) => !prev);
  };

  const login = (phone: string) => {
    setPhoneNumber(phone);
    dispatch(phoneNumberExists(phone))
      .unwrap()
      .then(() => {
        dispatch(requestOtp(phone))
          .unwrap()
          .then((data) => {
            setOtpModalOpen(true);
            setVerificationId(data.verificationId);
            setisLoginModalOpen(false);
          });
      });
  };

  const verifyOtp = (otp: string) => {
    dispatch(confirmOtp({ phoneNumber, verificationId, otp }))
      .unwrap()
      .then(() => {
        setPaymentMethodModal(true);
        setOtpModalOpen(false);
      })
      .catch(() => {
        toast.error("Verification failed!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const getQuantity = (id: string) => {
    const product = items.find((item) => item?.menuItem?.menuItemId == id);
    if (product) {
      return product.quantity;
    } else {
      return 0;
    }
  };

  const calculatePrice = () => {
    let price = 0;

    items?.forEach((item) => {
      price =
        (price + getItemData(item?.menuItem?.menuItemId)?.price) *
        item?.quantity;
    });

    return price;
  };

  const calculateTax = () => {
    const taxRate = cart?.taxRate ?? 0;
    let tax = (calculatePrice() * taxRate) / 100;
    return tax;
  };

  const handleConfirmOrder = () => {
    setTermsAndConditionsModal(false);
    if (!customerData) {
      setisLoginModalOpen(true);
    } else {
      setPaymentMethodModal(true)
      setTermsAndConditionsModal(false)
    }
  };

  const openTermsAndConditionsModal = () => {
    setTermsAndConditionsModal(true);
  };

  const handleCashOnDelivery = () => {
    dispatch(order({ customerId: customerData?._id, restaurantId: selectedRestaurant._id, items })).unwrap().then(() => {
      dispatch(clearCart());
      router.push('/order/success')
    })
  };

  const handlePayNow = () => {
    dispatch(order({ customerId: customerData?._id, restaurantId: selectedRestaurant._id, items })).unwrap().then((data) => {
      dispatch(takePayment({ orderId: data?._id, "paymentMethod": "Online", "redirectUrl": "https://revamped-gti-website-front-end.vercel.app/order" })).unwrap().then((data) => {
        router.push(`https://digitalpayments.alrajhibank.com.sa/pg/paymentpage.htm?PaymentID=${data?.paymentId}`)
      })
    })
  }

  return (
    <div>
      <div className="flex justify-between p-4 items-center relative z-[1]">
        <div>
          <SideNavbar hamBurgerIcon={true} />
        </div>
        <div
          className="cursor-pointer flex items-center"
          onClick={() => {
            language.name === "en"
              ? dispatch(updateLanguage("ar"))
              : dispatch(updateLanguage("en"));
            handleLanguageChange();
          }}
        >
          <div className="text-black font-semibold text-1xl">
            {language.name === "en" ? "EN" : "AR"}
          </div>
          <div className="ml-2">
            <Image
              src={language.name === "en" ? USAFlagIcon : FlagIcon}
              alt="FlagIcon"
              width={27}
            />
          </div>
        </div>
      </div>
      <div className={cart?.items?.length ? `mt-[30px] cartItemsMain` : `mt-[30px] cartItemsMain flex justify-center items-center`}>
        {cart?.items?.length ? (
          cart?.items?.map((item: any, index: number) => {
            return (
              <CartItem
                key={index}
                title={getItemData(item.menuItem.menuItemId)?.name}
                price={item?.amountBeforeDiscount}
                cartImg={getItemData(item.menuItem.menuItemId)?.image}
                incrementCounter={() =>
                  incrementCounter(item.menuItem.menuItemId)
                }
                decrementCounter={() =>
                  decrementCounter(item.menuItem.menuItemId)
                }
                count={getQuantity(item.menuItem.menuItemId)}
              />
            );
          })
        ) : (
          <div>
            <h2>
              No Item In Cart
            </h2>
          </div>
        )}
      </div>
      <div
        className="h-[191px] w-full bg-[#C02328] rounded-lg pt-5 pb-1 px-2"
        style={{
          boxShadow: " 0px 2.5px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex gap-4 ml-[41px]">
          <div className="w-[130px] h-[38px] bg-[#F5866B] rounded-lg text-[15px] font-[400] px-[8px] py-2 text-white">
            {t("cart.have-a-coupon")}?
          </div>
          <input className="w-[130px] h-[38px] bg-white rounded-lg px-3" />
          <button className="w-[38px] h-[38px] rounded-full bg-[#F5866B] text-[14px] font-[400] px-[4px] py-2 text-white">
            {t("cart.add")}
          </button>
        </div>
        <div className="flex gap-5 justify-center mt-[18px]">
          <div className="text-[15px] font-[400] pr-3 text-white">
            <div className="mr-4"> {t("cart.subtotal")}:</div>
            <div className="mt-[9px]"> {t("cart.tax")}:</div>
          </div>

          <div className="text-[15px] font-[400] pr-3 text-white">
            <div>
              {cart?.summary?.totalTaxableAmount} {t("payment.SAR")}
            </div>
            <div className="mt-[9px]">
              {cart?.summary?.totalTax} {t("payment.SAR")}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[35.5px]">
          <div className="text-[15px] font-[400] text-white">
            {" "}
            {t("cart.total")}
          </div>
          <div className="text-[15px] font-[400] pr-1 text-white">
            {cart?.summary?.totalWithTax} {t("payment.SAR")}
          </div>
        </div>
      </div>
      <div className="px-2 mt-[53px] mb-6">
        <CartBtn
          btnText1={t("page.Confirm-order")}
          onClick={openTermsAndConditionsModal}
          btnClasses="justify-center rounded-[6px] bg-[#C02328] w-full text-[14px] font-[400] py-[15px]"
          disable={cart?.items?.length ? false : true}
        />
      </div>
      <Modal
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="rounded-[14px] pb-6 px-4"
        isModalOpen={isLoginModalOpen}
        handleModalToggle={() => setisLoginModalOpen(!isLoginModalOpen)}
      >
        <div className="mt-[59px]">
          <LoginModal login={login} info={true} />
        </div>
      </Modal>

      <Modal
        modalCSS="items-center rounded-[14px] pb-6 px-4"
        cancelCSS="right-0"
        modalPosition="items-center"
        isModalOpen={termsAndConditionsModal}
        handleModalToggle={() =>
          setTermsAndConditionsModal(!termsAndConditionsModal)
        }
      >
        <div className="my-[59px]">
          <div className="text-center gap-3">
            <h4 className="text-center mt-6 mb-3 text-sm font-[600] text-[#494949]">
              {t("page.Terms-And-Condition")}
            </h4>
            <div className="flex justify-center text-center gap-3 mt-7">
              <button
                className="py-4 text-[12px] rounded-[6px] bg-[#C02328] text-white w-[40%]"
                onClick={() => setTermsAndConditionsModal(false)}
              >
                {t("page.Disagree")}
              </button>
              <button
                className="py-4 text-[12px] rounded-[6px] bg-gray-200 w-[40%]"
                onClick={handleConfirmOrder}
              >
                {t("page.Agree")}
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        modalCSS="items-center rounded-[14px] pb-6 px-4"
        cancelCSS="right-0"
        modalPosition="items-center"
        isModalOpen={paymentMethodModal}
        handleModalToggle={() => setPaymentMethodModal(!paymentMethodModal)}
      >
        <div className="my-[59px]">
          <div className="text-center gap-3">
            <h4 className="text-center mt-6 mb-3 text-sm font-[600] text-[#494949]">
              {t("page.Payment-Method")}
            </h4>
            <div className="flex justify-center text-center gap-3 mt-7">
              <button
                className="py-4 text-[12px] rounded-[6px] bg-[#C02328] text-white w-[40%]"
                onClick={handlePayNow}
              >
                {t("page.Pay-Now")}
              </button>
              <button
                className="py-4 text-[12px] rounded-[6px] bg-gray-200 w-[40%]"
                onClick={handleCashOnDelivery}
              >
                {t("page.Cash-On-Delivery")}
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        modalPosition="items-center"
        cancelCSS="right-0"
        modalCSS="rounded-[14px] pb-6 px-4"
        isModalOpen={otpModalOpen}
        handleModalToggle={() => setOtpModalOpen(!otpModalOpen)}
      >
        <div className="mt-[59px]">
          <OTPModal verifyOtp={verifyOtp} setOtpModalOpen={setOtpModalOpen} />
        </div>
      </Modal>
    </div>
  );
};

export default AddCart;
