import React from 'react';
import MenuSlider from './MenuSlider';
import MenuItemsContainer from './MenuItemsContainer';

const CartWithItems = ({
  categories,
  query,
}: {
  categories: any[];
  query: string;
}) => {
  return (
    <div>
      <MenuSlider />
      {categories.map((element, index) => {
        return (
          <MenuItemsContainer
            key={index}
            title={element?.name}
            id={element?._id}
            items={element?.docs ?? []}
            query={query}
          />
        );
      })}
    </div>
  );
};

export default CartWithItems;
