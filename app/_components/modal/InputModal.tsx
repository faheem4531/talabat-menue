import React, { Dispatch, SetStateAction } from "react";
import type { FC } from "react";
import Image from "next/image";
import searchIcon from "../../_assets/pngs/inputSearch.png";
import { useTranslation } from "react-i18next";
import { InputModal } from "../../_lib/types/genericComponents";

const InputModal: FC<InputModal> = ({ setQuery }) => {
   const { t, i18n } = useTranslation();
   const lang = i18n.language;
  const handleChange = (value: string) => {
    setQuery(value);
  };
  
  return (
    <div>
      <div className="relative flex w-[365px] m-auto">
        <Image
          src={searchIcon}
          alt="hamburger-menu-icon"
          className="absolute bottom-5 left-[17px] top-1/2 h-3 w-3 -translate-y-1/2 transform "
        />
        <input
          className=" h-[33px] w-full rounded-5px border border-transparent px-10  text-xs font-sm shadow-10 transition-all duration-300 ease-in-out focus:border-red focus:outline-none rounded-[3px] shadow-lg text-black placeholder-black"
          placeholder= {t("input.What-are-you-looking-for")}
          style={{
            boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};
export default InputModal;
