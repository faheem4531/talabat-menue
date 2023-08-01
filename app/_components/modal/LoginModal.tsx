import React, { useState } from 'react';
import type { FC } from 'react';
import { useTranslation } from "react-i18next";

import PhoneInput from 'react-phone-number-input';
import { LoginModalProps } from "../../_lib/types/genericComponents";

const LoginModal: FC<LoginModalProps> = ({ login = () => { }, info }) => {
  const [name, setName] = useState<string | undefined>('')
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>('');

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const handleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    login(phoneNumber || '')
  }

  return (
    <div>
      <h4 className="text-center mt-6 mb-10 text-lg font-[600] text-[#494949]">
        {info ?
          "User Information" : t("sideBar.login")
        }
      </h4>
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-xs font-medium text-gray-900">
            {t("login.NameLbl")}
          </label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5 "
            placeholder={t("login.Enter-your-name")}
            required
          />
        </div>
        {/* <div className="mb-6">
          <label className="block mb-2 text-xs font-medium text-gray-900">
            {t("login.Your-Password")}
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5"
            required
          />
        </div> */}
        <div className="mb-6">
          <PhoneInput
            placeholder={t("login.Enter-phone-number")}
            value={phoneNumber}
            onChange={(value: string | undefined) => setPhoneNumber(value)}
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
            />
          </div>
          <label className="ml-2 text-xs font-medium text-gray-900 ">
            {t("login.Remember-me")}
          </label>
        </div>
        <button
          disabled={!name || !phoneNumber}
          onClick={handleLogin}
          className="py-4 text-[12px] rounded-[6px] bg-[#C02328] text-white w-full "
        >
          {t("login.Submit")}
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
