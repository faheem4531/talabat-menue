"use client"
import React from 'react'
import GoogleMaps from '../googleMaps/page'
import SideNavbar from '../_components/SideNavbar/SideNavbar'
import CartBtn from '../_components/Buttons/cartBtn'
import { useRouter } from 'next/navigation';

const DeliverOrders = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/addCart`);
  }

  return (
    <div>
      <div className='mx-4 my-2'>
        <SideNavbar hamBurgerIcon={true} />
      </div>
      <GoogleMaps />
      <div className='fixed bottom-0 w-[392px] h-[101px] bg-white px-4 rounded-t-[16px]'>
        <CartBtn
          btnText1="Select"
          onClick={handleClick}
          btnClasses="justify-center rounded-[6px] bg-[#C02328] w-full text-[14px] font-[400] py-[15px] mt-8"
        />
      </div>
    </div>
  )
}

export default DeliverOrders;
