'use client'
import React from 'react'
import BranchLocation from '../branchLocation/page'
import SideNavbar from '../_components/SideNavbar/SideNavbar'
import PickUpBranches from './_component/PickUpBranches'
import { useAppSelector } from '../_store/hooks'

const PickUpOrders = () => {
  const restaurants = useAppSelector((state: any) => state.restaurant?.data?.docs);
  return (
    <div>
      <div className='fixed top-4 left-4 z-50'>
        <SideNavbar hamBurgerIcon={true} />
      </div>
      <BranchLocation />
      <div className='mt-[101px]'>
        <div className='m-auto w-[325px] flex gap-6 justify-start flex-wrap pickMapBranches p-2'>

          {restaurants.map((element: any) => {
            return (
              <PickUpBranches
                title={element.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default PickUpOrders