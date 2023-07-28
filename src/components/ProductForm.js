import React, { useState } from 'react';

const ProductForm = (props) => {
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    category: '',
    price: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addProduct(formData);
    setFormData({
      productId: '',
      productName: '',
      category: '',
      price: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product ID:
        <input type="text" name="productId" value={formData.productId} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Product Name:
        <input type="text" name="productName" value={formData.productName} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="food item">Food Item</option>
          <option value="electronic item">Electronic Item</option>
          <option value="skincare item">Skincare Item</option>
        </select>
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ProductForm;






