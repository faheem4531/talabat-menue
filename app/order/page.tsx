import React from 'react'

import Image from 'next/image';
import SideNavbar from '@/app/_components/SideNavbar/SideNavbar';
import PaymentSuccess from './_components/PaymentSuccess';

import FlagIcon from "../_assets/pngs/navFlag.png";

const paymentSuccess = () => {
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
      <div className='px-4'>
        <PaymentSuccess/>
      </div>
    </div>
  );
}

export default paymentSuccess
