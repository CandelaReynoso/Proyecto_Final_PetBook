import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    status: true,
    image: '',
    quantity: 0,
    available: true,
    price: 0,
    category: '',
    description: '',
    weight: 0,
    size: '',
    specie: '',
    consumption_age: 0,
    discount: false,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://localhost:3001/categories');
      setCategories(response.data.categories);
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3001/products', formData, {
        headers: {
          "Content-Type": "application/json",
          "x-token": token
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Image:
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
      </label>

      <label>
        Quantity:
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">-- Select a category --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
      </label>

      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>

      <label>
        Weight:
        <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
      </label>

      <label>
        Size:
        <input type="text" name="size" value={formData.size} onChange={handleChange} />
      </label>

      <label>
        Specie:
        <select name="specie" value={formData.specie} onChange={handleChange}>
          <option value="">-- Select a specie --</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Guinea Pig">Guinea Pig</option>
            <option value="Parrot">Parrot</option>
        </select>
      </label>

      <label>
        Consumption age:
        <input type="number" name="consumption_age" value={formData.consumption_age} onChange={handleChange} />
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
