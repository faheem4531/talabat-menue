'use client'
import FailedImage from 'public/error-img.gif';
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

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
