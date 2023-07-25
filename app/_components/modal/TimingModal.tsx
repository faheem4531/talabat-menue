import React from "react";
import { useTranslation } from "react-i18next";



const TimingModal = () => {
   const { t, i18n } = useTranslation();
   const lang = i18n.language;
  const hoursItem = [
    {
      day: t("openHours.Sunday"),
      
      // hours: "Open 24 Hours",
      hours: t("openHours.Open-24-Hours"),
    },
    {
      day: t("openHours.Monday"),
      hours: t("openHours.Open-24-Hours"),
    },
    {
      day: t("openHours.Tuesday"),
      hours: t("openHours.Open-24-Hours"),
    },
    {
      day: t("openHours.Wednesday"),
      hours: t("openHours.Open-24-Hours"),
    },
    {
      day: t("openHours.Thursday"),
      hours: t("openHours.Open-24-Hours"),
    },
    {
      day: t("openHours.Friday"),
      hours: t("openHours.Open-24-Hours"),
    },
    {
      day: t("openHours.Saturday"),
      hours: t("openHours.Open-24-Hours"),
    },
  ];

  return (
    <div>
      <h4 className="text-center mt-6 mb-10 text-sm font-[600] text-[#494949]">
        Opening Hours
      </h4>
      {hoursItem.map((item, index) => {
        return (
          <div className="bg-[#00000036] py-[7px] mb-[2px]" key={index}>
            <div className="flex justify-center text-xs font-[400] text-[#494949]">
              <div className="flex justify-between w-44">
                <div className="flex justify-between w-20">
                  <div className="text-left font-semibold">{item.day} </div>
                  <div>:</div>
                </div>
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
