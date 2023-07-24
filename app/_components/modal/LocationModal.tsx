import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import locationIcon from '../../_assets/svgs/location.svg';

const LocationModal = (restaurants: any) => {
  return (
    <div>
      {restaurants?.restaurants?.map((item: any) => {
        return (
          <div
            className="flex justify-between items-center mb-[18px]"
            key={item._id}
          >
            <div className="flex  items-center">
              <div>
                <Image src={locationIcon} alt="locationIcon" />
              </div>
              <h4 className="text-[12px] font-[600] text-[#494949] ml-[13px]">
                {item.name}
              </h4>
            </div>
            <Link className="cursor-pointer ml-9 text-[10px] font-[400] text-[#494949]" href={{
              pathname: '/branchLocation',
              query: { lat: item?.location?.latitude, lng: item?.location?.longitude }
              }}>
                View Location in Map
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LocationModal;
