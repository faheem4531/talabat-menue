import React from 'react'
import Branch from './_component/Branch'
import SideNavbar from '../_components/SideNavbar/SideNavbar'
import BranchLocation from '../branchLocation/page'

const Branches = () => {
  return (
    <div>
      <div className='fixed top-4 left-4 z-50'>
        <SideNavbar hamBurgerIcon={true} />
      </div>
      <BranchLocation />
      <div className='mt-8 px-3'>
        <Branch />
        <Branch />
        <Branch />
      </div>
    </div>
  )
}

export default Branches;
