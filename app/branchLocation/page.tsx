'use client';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';

import { useSearchParams } from 'next/navigation';

const BranchLocation = () => {
  const searchParams = useSearchParams();
  const lat: number = Number(searchParams.get('lng')) || 0;
  const lng: number = Number(searchParams.get('lat')) || 0;
  const mapContainerStyle = {
    height: '250px',
    width: '100%',

  };
  const mapOptions = {
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC1jv_O7Ixs44xeLFT2oUHoLf3T1ZqwbGo',
    libraries: ['drawing', 'places'],
  });
  return (
    <div>
      {isLoaded && (
        <GoogleMap
          zoom={15}
          center={{ lat, lng }}
          mapContainerStyle={mapContainerStyle}
          id='map'
          options={mapOptions}
        >
          <MarkerF position={{ lat, lng }} key='marker_1' />
        </GoogleMap>
      )}
    </div>
  );
};

export default BranchLocation;
