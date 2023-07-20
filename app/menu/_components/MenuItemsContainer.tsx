import React from "react";
import MenuItem from "./MenuItem";

const MenuItemsContainer = () => {
  return (
    <div className="mt-[31px]">
      <h5 className="text-sm text-[#494949] font-semibold mb-[11px]">
        Breakfast
      </h5>
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
};
export default MenuItemsContainer;
