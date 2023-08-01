'use client';
import {
  StandaloneSearchBox,
  useLoadScript,
  GoogleMap,
  MarkerF,
} from '@react-google-maps/api';

import { useAppSelector } from '../_store/hooks';

const GoogleMaps = ({
  address,
  inputRef,
  mapOptions,
  description,
  updateLongLat,
  mapContainerStyle,
  handlePlaceChanged,
  handleDescriptionChange,
}: any) => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC1jv_O7Ixs44xeLFT2oUHoLf3T1ZqwbGo',
    libraries: ['drawing', 'places'],
  });

  const stateAddress = useAppSelector((state: any) => state.address);
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
