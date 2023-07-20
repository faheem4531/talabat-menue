import React from "react";
import MenuSlider from "./MenuSlider";
import MenuItemsContainer from "./MenuItemsContainer";

const CartWithItems = () => {
  const itemsCon = [
    {
      title: "Breakfast",
      id: "1",
    },
    {
      title: "Burgers",
      id: "2",
    },
    {
      title: "Cakes",
      id: "3",
    },
  ];
  return (
    <div>
      <MenuSlider />
      {itemsCon.map((element) => {
        return <MenuItemsContainer title={element.title} id={element.id} />;
      })}
    </div>
  );
};

export default CartWithItems;
