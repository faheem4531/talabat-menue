import React from "react";
import MenuItem from "./MenuItem";
import Slide5 from "../../_assets/svgs/item5.svg";
import Slide6 from "../../_assets/svgs/item6.svg";
import Slide7 from "../../_assets/svgs/item7.svg";

const MenuItemsContainer = () => {
  return (
    <div className="mt-[31px]">
      <h5 className="text-sm text-[#494949] font-semibold mb-[11px]">
        Breakfast
      </h5>
      <MenuItem itemsImg={Slide5} />
      <MenuItem itemsImg={Slide6} />
      <MenuItem itemsImg={Slide7} />
    </div>
  );
};
export default MenuItemsContainer;
