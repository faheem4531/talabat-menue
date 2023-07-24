'use client';
import { useRef, useState } from 'react';
import {
  StandaloneSearchBox,
  useLoadScript,
  GoogleMap,
  MarkerF,
} from '@react-google-maps/api';

const GoogleMaps = () => {
  const inputRef: any = useRef();
  const [address, setAddress] = useState({
    lat: 35.9078,
    lng: 127.7669,
  });
  const mapContainerStyle = {
    height: '250px',
    width: '100%',
    marginTop: '30px',
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
  return (
    <div>
      {isLoaded && (
        <>
          <StandaloneSearchBox
            onLoad={(ref: any) => (inputRef.current = ref)}
            onPlacesChanged={handlePlaceChanged}
          >
            <input type='text' placeholder='Search for a location' />
          </StandaloneSearchBox>
          <div>
            <GoogleMap
              zoom={15}
              center={address}
              mapContainerStyle={mapContainerStyle}
              id='map'
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
  );
};

export default GoogleMaps;
