'use client'
import { useEffect } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import FailedImage from 'public/error-img.gif';

const OrderDecline = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push(`/cart`)
    }, 3000)
  }, [])
  return (
    <div className="container">
      <Image src={FailedImage} alt={'failed-gif'} />
    </div>
  )
}

export default OrderDecline
