import React from "react";
import MenuSlider from "./MenuSlider";
import MenuItemsContainer from "./MenuItemsContainer";
import Slide1 from "../../_assets/svgs/item1.svg";
import Slide2 from "../../_assets/svgs/item2.svg";
import Slide3 from "../../_assets/svgs/item3.svg";
import Slide4 from "../../_assets/svgs/item4.svg";

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
  const slider = [
    {
      sliderImg: require("../../_assets/svgs/item1.svg"),
      name: "Breakfast",
      id: "#1",
    },
    {
      sliderImg: require("../../_assets/svgs/item2.svg"),
      name: "Soup",
      id: "#2",
    },
    {
      sliderImg: require("../../_assets/svgs/item3.svg"),
      name: "Non Veg",
      id: "#  3",
    },
    {
      sliderImg: require("../../_assets/svgs/item4.svg"),
      name: "Salad",
      id: "4",
    },
    {
      sliderImg: require("../../_assets/svgs/item4.svg"),
      name: "Salad",
      id: "#4",
    },
    {
      sliderImg: require("../../_assets/svgs/item4.svg"),
      name: "Salad",
      id: "#4",
    },
  ];
  return (
    <div>
      <MenuSlider data={slider} />
      {itemsCon.map((element) => {
        return <MenuItemsContainer title={element.title} id={element.id} />;
      })}
    </div>
  );
};

export default CartWithItems;
