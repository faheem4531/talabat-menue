import React from "react";
import Image from "next/image";
import locationIcon from "../../_assets/svgs/location.svg";

const LocationModal = () => {
  const loc = [
    {
      title: "Gulf Madina",
      link: "View Location In Map",
    },
    {
      title: "BurerPlus",
      link: "View Location In Map",
    },
    {
      title: "Gulf Madina",
      link: "View Location In Map",
    },
    {
      title: "Gulf Madina",
      link: "View Location In Map",
    },
  ];
  return (
    <div>
      {loc.map((item, index) => {
        return (
          <div
            className="flex justify-between items-center mb-[18px]"
            key={index}
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
              {item.link}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationModal;
