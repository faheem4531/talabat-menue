import React from 'react';
import MenuSlider from './MenuSlider';
import MenuItemsContainer from './MenuItemsContainer';

const CartWithItems = ({
  categories,
}: {
  categories: any[];
}) => {
  return (
    <div>
      <MenuSlider />
      {categories.map((element, index) => {
        return <MenuItemsContainer key={index} title={element.name} id={element._id} items={element?.docs ?? []} />;
      })}
    </div>
  );
};

export default CartWithItems;
