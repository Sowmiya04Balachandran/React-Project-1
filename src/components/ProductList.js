import React from 'react';
import ElectronicItem from './ElectronisItem';
import SkinCareItem from './SkinCareItem';
import FoodItem from './FoodItem';

const ProductList = (props) => {
  const groupedProducts = {};

  for (const product of props.products) {
    const  category  = product.category;
    if (!groupedProducts[category]) {
      groupedProducts[category] = [product];
    } else {
      groupedProducts[category].push(product);
    }
  }

  return (
    <div>
      <h2>Product List</h2>
      <h2>Electronic Items</h2>
      {groupedProducts['electronic item'] && <ElectronicItem products={groupedProducts['electronic items']} />}
      <h2>SkinCare Items</h2>
      {groupedProducts['skinCare item'] && <SkinCareItem  products={groupedProducts['skincare items']} />}
      <h2>Food Items</h2>
      {groupedProducts['food item'] && <FoodItem   products={groupedProducts['food item']}/>}
            
      </div>
  );
};

export default ProductList;















