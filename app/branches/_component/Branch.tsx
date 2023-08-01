import React from 'react'
import Image from 'next/image'
import locIcon from "../../_assets/pngs/locationWhiteIcon.png"

const Branch = ({title}) => {
  return (
    <div>
      <div className='cursor-pointer h-[58px]  rounded-lg flex items-center mb-2' style={{
        boxShadow: " 0px 0px 1px 0px rgba(0, 0, 0, 0.25)"
      }}>
        <div className='mb-1 bg-[#C02328] rounded-l-lg h-[58px] w-[53px] flex justify-center items-center mr-3'>
          <Image src={locIcon} alt='location' />
        </div>
        <div>
          <div className='text-[10px] text-black font-semibold'>{title}</div>
        </div>
      </div>
    </div >
  )
}

export default Branch