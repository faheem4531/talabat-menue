import React, { Dispatch, SetStateAction } from "react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { InputModal } from "../../_lib/types/genericComponents";

import Image from "next/image";
import searchIcon from "../../_assets/pngs/inputSearch.png";

const InputModal: FC<InputModal> = ({ setQuery }) => {
   const { t, i18n } = useTranslation();
   const lang = i18n.language;
  
  return (
    <div className='mt-5'>
      <div className="relative flex w-[370px] m-auto">
        <Image
          src={searchIcon}
          alt="hamburger-menu-icon"
          className="absolute bottom-5 left-[17px] top-1/2 h-3 w-3 -translate-y-1/2 transform "
        />
        <input
          className=" h-[33px] w-full px-10 text-sm font-sm focus:outline-none text-black"
          placeholder={t("input.What-are-you-looking-for")}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};
export default InputModal;
