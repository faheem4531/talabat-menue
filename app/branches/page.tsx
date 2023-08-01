'use client'

import React from 'react'
import Branch from './_component/Branch'
import SideNavbar from '../_components/SideNavbar/SideNavbar'
import BranchLocation from '../branchLocation/page'
import { useAppSelector, useAppDispatch } from '../_store/hooks'
import { setSelectedRestaurant } from '../_store/reducers/restaurantReducer'

const Branches = () => {
  const dispatch = useAppDispatch()
  const restaurants = useAppSelector((state: any) => state.restaurant?.data?.docs);
  const selectedRestaurant = useAppSelector((state: any) => state.restaurant?.selectedRestaurant)
  const setRestaurant = (element: any) => {
    dispatch(setSelectedRestaurant(element))
  }
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div>
      <div className='fixed top-4 left-4 z-50'>
        <SideNavbar hamBurgerIcon={true} />
      </div>
      <BranchLocation
        latitude={selectedRestaurant?.location?.latitude}
        longitude={selectedRestaurant?.location?.longitude} />
      <div className='mt-8 px-3 mapBranches'>
        {restaurants.map((element: any) => {
          return (
            <div onClick={() => {
              setRestaurant(element)
              scroll()
            }}><Branch
                title={element.name}
              /></div>


          );
        })}
      </div>
    </div>
  )
}

export default Branches;
