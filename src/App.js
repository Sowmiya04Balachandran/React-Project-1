import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load data from local storage when the component mounts
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Update local storage whenever the products array changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <h1>Product Management App</h1>
      <ProductForm addProduct={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default App;





