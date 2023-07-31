import React from 'react'
import Image from 'next/image'
import locIcon from "../../_assets/svgs/location.svg"

const PickUpBranches = () => {
  return (
    <div>
      <div className='h-[139px] w-[139px] borde text-center flex justify-center items-center flex-col rounded-lg' style={{
        boxShadow: " 0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
      }}>
        <div className='mb-1'>
          <Image src={locIcon} alt='location' />
        </div>
        <div>
          <div className='text-[10px] text-black font-semibold'>Nur Updated Again 2</div>
        </div>
      </div>
    </div >
  )
}

export default PickUpBranches