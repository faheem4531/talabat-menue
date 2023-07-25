'use client'
import SuccessImage from 'public/success.gif';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
