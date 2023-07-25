import React from "react";
import type { FC } from "react";
import AddOnSelecter from "./AddOnSelecter";
import { ItemCustomizer } from "../../_lib/types/itemsDetails";

const ItemCustomizer: FC<ItemCustomizer> = ({ title, id, options, addOption, multiple, isChecked }) => {

  return (
    <div>
      <div className="mt-5" id={id}>
        <h5 className="text-sm font-semibold mb-[11px]">{title}</h5>
        <div>
          {options.map((element: any, index: number) => {
            return (
              <AddOnSelecter
                key={index}
                title={element.name}
                price={`+${element.price} SR`}
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
