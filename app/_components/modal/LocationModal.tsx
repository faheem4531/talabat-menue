import React from 'react';
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
                {item.title}
              </h4>
            </div>

            <div className="cursor-pointer ml-9 text-[10px] font-[400] text-[#494949]">
              View Location in Map
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationModal;
