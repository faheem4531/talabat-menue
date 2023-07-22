import React from "react";
import AddOnSelecter from "./AddOnSelecter";
const ItemCustomizer = ({ title, id, options }: any) => {

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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemCustomizer;
