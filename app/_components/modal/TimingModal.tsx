import React from "react";

const TimingModal = () => {
  const hoursItem = [
    {
      day: "Saturday",
      hours: "Open 24 Hours",
    },
    {
      day: "Sunday",
      hours: "Open 24 Hours",
    },
    {
      day: "Monday",
      hours: "Open 24 Hours",
    },
    {
      day: "Tuesday",
      hours: "Open 24 Hours",
    },
    {
      day: "Wednesday",
      hours: "Open 24 Hours",
    },
    {
      day: "Thirsday",
      hours: "Open 24 Hours",
    },
    {
      day: "Friday",
      hours: "Open 24 Hours",
    },
  ];

  return (
    <div>
      <h4 className="text-center mt-6 mb-10 text-xs font-[600] text-[#494949]">
        Opening Hours
      </h4>
      {hoursItem.map((item) => {
        return (
          <div className="bg-[#00000036] py-[7px] mb-[2px]">
            <div className="flex justify-center text-xs font-[400] text-[#494949]">
              <div className="flex justify-between w-44">
                <div className="text-left ">{item.day} :</div>
                <div className="">{item.hours}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimingModal;
