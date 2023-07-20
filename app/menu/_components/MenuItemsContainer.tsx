import React from "react";
import MenuItem from "./MenuItem";

const MenuItemsContainer = ({ title, id }: any) => {
  const items = [
    {
      title: "Masala Omelette",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet reprehenderit est.",
      calerioes: "10 cal",
      price: "100 Sar",
      itemsImg: require("../../_assets/svgs/item5.svg"),
    },
    {
      title: "Mushroom Omelette",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet reprehenderit est.",
      calerioes: "10 cal",
      price: "100 Sar",
      itemsImg: require("../../_assets/svgs/item6.svg"),
    },
    {
      title: "Veg Omelette",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet reprehenderit est.",
      calerioes: "10 cal",
      price: "100 Sar",
      itemsImg: require("../../_assets/svgs/item7.svg"),
    },
  ];
  return (
    <div className="mt-[31px]" id={id}>
      <h5 className="text-sm text-[#494949] font-semibold mb-[11px]">
        {title}
      </h5>
      {items.map((element) => {
        return (
          <MenuItem
            itemsImg={element.itemsImg}
            title={element.title}
            discription={element.discription}
            calerioes={element.calerioes}
            price={element.price}
          />
        );
      })}

      {/* <MenuItem itemsImg={Slide6} />
      <MenuItem itemsImg={Slide7} /> */}
    </div>
  );
};
export default MenuItemsContainer;
