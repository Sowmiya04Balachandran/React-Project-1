import React, { useState } from 'react';
import Card from './Card/Card';
import classes from './productForm.module.css'

const ProductForm = (props) => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { productId, productName, category, price };
    props.addProduct(formData);
    setProductId('');
    setProductName('');
    setCategory('');
    setPrice('');
  };
   const idHandler=(event)=>{
    setProductId(event.target.value)
   }

   const productHandler=(event)=>{
    setProductName(event.target.value)
   }

   const categoryHandler =(event)=>{
    setCategory(event.target.value)
   }

   const priceHandler=(event)=>{
    setPrice(event.target.value)

   }

  return (
    <Card>
    <form  className={classes.form}onSubmit={handleSubmit}>
      <label>
        Product ID:
        <input type="text" value={productId} onChange={idHandler} required />
      </label>
      <br />
      <label>
        Product Name:
        <input type="text" value={productName} onChange={productHandler} required />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={categoryHandler} required>
          <option value="">Select a category</option>
          <option value="food item">Food Item</option>
          <option value="electronic item">Electronic Item</option>
          <option value="skincare item">Skincare Item</option>
        </select>
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={priceHandler} required />
      </label>
      <br />
      <button type="submit">Add Item</button>
    </form>
    </Card>
  );
};

export default ProductForm;
