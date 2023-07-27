import React from "react";
import { useTranslation } from "react-i18next";

const AboutModal = () => {
   const { t, i18n } = useTranslation();
   const lang = i18n.language;

  return (
    <div>
      <h4 className="text-center mt-6 mb-10 text-lg font-[600] text-[#494949]">
        {t("login.About-us")}
      </h4>
    </div>
  );
};

export default AboutModal;
