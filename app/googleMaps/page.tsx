'use client';
import { useRef, useState } from 'react';
import {
  StandaloneSearchBox,
  useLoadScript,
  GoogleMap,
  MarkerF,
} from '@react-google-maps/api';

const GoogleMaps = () => {
  const [description, setDescription] = useState('');
  const inputRef: any = useRef();
  const [address, setAddress] = useState({
    lat: 35.9078,
    lng: 127.7669,
  });
  const mapContainerStyle = {
    height: '100vh',
    width: '100%',
    borderRadius: '5px',
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC1jv_O7Ixs44xeLFT2oUHoLf3T1ZqwbGo',
    libraries: ['drawing', 'places'],
  });
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
  const updateLongLat = (event: any) => {
    setAddress((prev) => ({
      ...prev,
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }));
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

  return (
    <div>
      <div className=''>
        {isLoaded && (
          <>
            <div className='px-4'>
              <StandaloneSearchBox
                onLoad={(ref: any) => (inputRef.current = ref)}
                onPlacesChanged={handlePlaceChanged}
              >
                <div className='bg-slate-500 w-full rounded-lg overflow-hidden
                '>
                  <div className='border-b-[1px]'>
                    <input type='text' placeholder='Address Name' className='h-[52px] text-xs placeholder-[#0000004d] w-full pl-[15px] focus:outline-none' />
                  </div>
                  <div>
                    <input
                      type='text'
                      placeholder='Type Address Description'
                      value={description}
                      onChange={handleDescriptionChange}
                      className='h-[52px] text-xs placeholder-[#0000004d] w-full pl-[15px] focus:outline-none'
                    />
                  </div>
                </div>
              </StandaloneSearchBox>
            </div>
            <div className='absolute top-0 -z-10 w-[392px]'>
              <GoogleMap
                zoom={15}
                center={address}
                mapContainerStyle={mapContainerStyle}
                id='map'
                options={mapOptions}
              >
                <MarkerF
                  position={address}
                  key='marker_1'
                  draggable
                  onDragEnd={updateLongLat}
                />
              </GoogleMap>
            </div>
          </>
        )}
      </div>
      <div>

      </div>
    </div>
  );
};

export default GoogleMaps;
