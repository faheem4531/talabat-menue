import React from "react";
import AddOnSelecter from "./AddOnSelecter";
const ItemCustomizer = ({ title, id }: any) => {
  const addSelecter = [
    {
      title: "Onion",
      price: "+2.0 SR",
      caleries: "100 cal",
    },
    {
      title: "Tomato",
      price: "+2.0 SR",
      caleries: "100 cal",
    },
    {
      title: "Sasuse",
      price: "+2.0 SR",
      caleries: "100 cal",
    },
    {
      title: "Latus",
      price: "+2.0 SR",
      caleries: "100 cal",
    },
  ];
  return (
    <div>
      <div className="mt-5" id={id}>
        <h5 className="text-sm font-semibold mb-[11px]">{title}</h5>
        <div>
          {addSelecter.map((element) => {
            return (
              <AddOnSelecter
                title={element.title}
                price={element.price}
                caleries={element.caleries}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemCustomizer;
