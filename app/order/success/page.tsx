'use client'
import { useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SuccessImage from 'public/success.gif';

const OrderSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(`/order`);
    }, 3000);
  }, []);

  return (
    <div className='container'>
      <Image src={SuccessImage} alt={'success-gif'} />
    </div>
  );
};

export default OrderSuccess;
