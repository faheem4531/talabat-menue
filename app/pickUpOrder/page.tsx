import React from 'react'
import BranchLocation from '../branchLocation/page'
import SideNavbar from '../_components/SideNavbar/SideNavbar'
import PickUpBranches from './_component/PickUpBranches'

const PickUpOrders = () => {
  return (
    <div>
      <div className='fixed top-4 left-4 z-50'>
        <SideNavbar hamBurgerIcon={true} />
      </div>
      <BranchLocation />
      <div className='mt-[101px]'>
        <div className='m-auto w-[335px] flex gap-6 justify-start flex-wrap pickMapBranches p-2'>
          <PickUpBranches />
          <PickUpBranches />
          <PickUpBranches />
        </div>
      </div>
    </div>
  )
}

export default PickUpOrders