import React from 'react';
import type { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useAppDispatch } from '@/app/_store/hooks';
import { LocationModal } from '../../_lib/types/genericComponents';

import locationIcon from '../../_assets/svgs/location.svg';
import { setSelectedRestaurant } from '@/app/_store/reducers/restaurantReducer';

const LocationModal: FC<LocationModal> = ({ restaurants, setLocModalOpen }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      {restaurants?.map((item: any) => {
        return (
          <div
            className="flex justify-between items-center mb-[18px]"
            key={item._id}
          >
            <div className="flex  items-center">
              <div>
                <Image src={locationIcon} alt="locationIcon" />
              </div>
              <h4
                className="cursor-pointer text-[12px] font-[600] text-[#494949] ml-[13px]"
                onClick={() => {
                  dispatch(setSelectedRestaurant(item));
                  setLocModalOpen(false);
                }}
              >
                {item.name}
              </h4>
            </div>
            <Link
              className="cursor-pointer ml-9 text-[10px] font-[400] text-[#494949]"
              href={{
                pathname: '/branchLocation',
                query: {
                  lat: item?.location?.latitude,
                  lng: item?.location?.longitude,
                },
              }}
            >
              View Location in Map
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LocationModal;
