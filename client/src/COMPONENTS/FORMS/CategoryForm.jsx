import React, { useState, useEffect, useRef } from "react";

const CategoryForm = () => {
  const [formData, setFormData] = useState({ name: "" });
  const nameInputRef = useRef(null);

  useEffect(()=>{
    nameInputRef.current.focus();
  },[])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch("http://localhost:3001/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": token
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name of Category: 
        <input
          type="text"
          name="name"
          placeholder="Type the category..."
          ref={nameInputRef}
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CategoryForm;
