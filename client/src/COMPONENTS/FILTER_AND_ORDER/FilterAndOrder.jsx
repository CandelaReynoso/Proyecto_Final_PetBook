import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPets } from "../../Redux/actions";
import { createSearchParams } from "react-router-dom";

const FilterAndOrder = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState();

  const handleClick = (e) => {
  if(e.target.value === "Default") return 
  
    setChecked({ ...checked, [e.target.name]: e.target.value });
  
    
    
    
  };

const handlerFilter = ()=>{
    dispatch(getPets(`?${createSearchParams(checked)}`))
    
}

  return (
    <div>
      <label htmlFor="name">filtrar por ESPECIE</label>
      <select name="specie" onChange={(e) => handleClick(e)}>
      <option value="Default">Select a specie</option>
     <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
        <option value="Guinea Pig">Guinea Pig</option>
        <option value="Parrot">Parrot</option>
      </select>

      <label htmlFor="name">filtrar por GENERO</label>
      <select onChange={(e) => handleClick(e)} name="gender">
      <option value="Default">Select a gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label htmlFor="name">filtrar por TAMAÑO</label>
      <select onChange={(e) => handleClick(e)} name="size">
      <option value="Default">Select a size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <label htmlFor="name">ordenar POR</label>
      <select onChange={(e) => handleClick(e)} name="typeOrder">
      <option value="Default">sort by</option>
        <option value="name">name</option>
        <option value="age">age</option>
        <option value="weight">weight</option>
      </select>
      <label htmlFor="name">ordenar de MANERA</label>
      <select onChange={(e) => handleClick(e)} name="sort">
      <option value="Default">order in a way</option>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
      
      <button onClick={handlerFilter}>Filter & Order</button>
    </div>
  );
};

export default FilterAndOrder;
// name, specie, gender, size, weight, age, godFather, sort, typeOrder
