import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
    <div>
    <form onSubmit={handleSubmit} className="m-8">
      <label className="text">
        Name of Category: 
        <input
          type="text"
          name="name"
          placeholder="..."
          ref={nameInputRef}
          value={formData.name}
          onChange={handleChange}
          className="inputs"
        />
      </label>
      <div>
      <button  
      type="submit"
      className="btn btn-accent btn-sm mt-3">Create Category
      </button>
      </div>



    </form>
    <div>
        <Link to={"/Admin"}>
          <button className="btn btn-primary m-8 "> Back</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryForm;
