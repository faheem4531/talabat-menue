import React from 'react';
import MenuItem from './MenuItem';

const MenuItemsContainer = ({ title, id, items = [], query }: any) => {
  const filteredResults = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="mt-[31px]" id={id}>
      <h5 className="text-sm text-[#494949] font-semibold mb-[11px]">
        {title}
      </h5>
      {filteredResults.map((element: any, index: number) => {
        return (
          <MenuItem
            key={index}
            id={element._id}
            itemsImg={element.image}
            title={element.name}
            discription={element.description}
            calerioes={element.calories}
            price={element.price}
            additions={element.additions}
          />
        );
      })}
    </div>
  );
};
export default MenuItemsContainer;
