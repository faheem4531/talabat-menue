import React from 'react';
import MenuItem from './MenuItem';

const MenuItemsContainer = ({ title, id, items = [] }: any) => {

  return (
    <div className="mt-[31px]" id={id}>
      <h5 className="text-sm text-[#494949] font-semibold mb-[11px]">
        {title}
      </h5>
      {items.map((element: any) => {
        return (
          <MenuItem
            itemsImg={element.image}
            title={element.name}
            discription={element.description}
            calerioes={element.calories}
            price={element.price}
          />
        );
      })}

    </div>
  );
};
export default MenuItemsContainer;
