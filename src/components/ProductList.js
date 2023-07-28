import React from 'react';

const ProductList = (props) => {
  const groupedProducts = {};

  for (const product of props.products) {
    const { category } = product;
    if (!groupedProducts[category]) {
      groupedProducts[category] = [product];
    } else {
      groupedProducts[category].push(product);
    }
  }

  return (
    <div>
      <h2>Product List</h2>

      <h3>Electronic Items</h3>
      {groupedProducts['electronic item'] && (
        <div>
        
          <ul>
            {groupedProducts['electronic item'].map((product, index) => (
              <li key={index}>
                <strong>Product Name:</strong> {product.productName}
                <br />
                ID: {product.productId}, Price: {product.price}
              </li>
            ))}
          </ul>
        </div>
      )}
         <h3>Food Items</h3>
      {groupedProducts['food item'] && (
        <div>
        
          <ul>
            {groupedProducts['food item'].map((product, index) => (
              <li key={index}>
                <strong>Product Name:</strong> {product.productName}
                <br />
                ID: {product.productId}, Price: {product.price}
              </li>
            ))}
          </ul>
        </div>
      )}
          <h3>Skincare Items</h3>
      {groupedProducts['skincare item'] && (
        <div>
        
          <ul>
            {groupedProducts['skincare item'].map((product, index) => (
              <li key={index}>
                <strong>Product Name:</strong> {product.productName}
                <br />
                ID: {product.productId}, Price: {product.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductList;















