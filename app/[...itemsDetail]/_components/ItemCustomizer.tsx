import React from "react";
import type { FC } from "react";
import AddOnSelecter from "./AddOnSelecter";
import { ItemCustomizer, Options } from "../../_lib/types/itemsDetails";
import { useTranslation } from "react-i18next";

const ItemCustomizer: FC<ItemCustomizer> = ({ title, id, options, addOption, multiple, isChecked }) => {
const { t, i18n } = useTranslation();
const lang = i18n.language;

  return (
    <div>
      <div className="mt-5" id={id}>
        <h5 className="text-sm font-semibold mb-[11px]">{title}</h5>
        <div>
          {options?.map((element: Options, index: number) => {
            return (
              <AddOnSelecter
                key={index}
                title={element.name}
                price={`+${element.price} ${t("payment.SAR")}`}
                caleries={element.calory}
                addOption={addOption}
                addOnId={id}
                optionId={element._id}
                multiple={multiple}
                isChecked={isChecked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemCustomizer;
