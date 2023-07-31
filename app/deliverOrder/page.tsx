"use client"
import React, { useState, useRef } from 'react'
import GoogleMaps from '../googleMaps/page'
import SideNavbar from '../_components/SideNavbar/SideNavbar'
import CartBtn from '../_components/Buttons/cartBtn'
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '../_store/hooks';
import { updateAddress } from '../_store/reducers/addressReducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DeliverOrders = () => {
  const dispatch = useAppDispatch()
  const router = useRouter();

  const cart  = useAppSelector((state) => state.cart);

  const inputRef: any = useRef();
  
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState({
    lat: 35.9078,
    lng: 127.7669,
  });

  const mapContainerStyle = {
    height: '100vh',
    width: '100%',
    borderRadius: '5px',
  };

  const mapOptions = {
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const updateLongLat = (event: any) => {
    setAddress((prev) => ({
      ...prev,
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }));
  };

  const handlePlaceChanged = () => {
    const [place] = inputRef.current?.getPlaces() || [];
    if (place) {
      setAddress((prev) => ({
        ...prev,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }));
    }
  };
 
  const handleClick = () => {
    if(address) {   
      dispatch(updateAddress({lng: address.lng, lat: address.lat, description:description }))
      router.push(cart?.items?.length ? "/addCart": `/`);
}
else
{
  toast(`Search Field cannot be empty!`, { type: 'warning' })
}
  }

  return (
    <div>
      <div className='mx-4 my-2'>
        <SideNavbar hamBurgerIcon={true} />
      </div>
      <GoogleMaps
      address={address}
      inputRef={inputRef}
      mapOptions={mapOptions}
      description={description}
      updateLongLat={updateLongLat}
      mapContainerStyle={mapContainerStyle}
      handlePlaceChanged={handlePlaceChanged}
      handleDescriptionChange={handleDescriptionChange}
      />
      <div className='fixed bottom-0 w-[392px] h-[101px] bg-white px-4 rounded-t-[16px]'>
        <CartBtn
          btnText1="Select"
          onClick={handleClick}
          btnClasses="justify-center rounded-[6px] bg-[#C02328] w-full text-[14px] font-[400] py-[15px] mt-8"
        />
       <ToastContainer autoClose={2000} theme="colored" />

      </div>
    </div>
  )
}

export default DeliverOrders;
