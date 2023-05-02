import React, { useState } from 'react';
import axios from 'axios';
import { createSearchParams } from "react-router-dom";
import { filterProducts } from '../../Redux/actions';
import { useDispatch } from 'react-redux';

function FilterProducts() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);

const [querys, setQuerys] = useState()



const handlerSelect = (e) =>{
  if (e.target.value === "Default") return;
  
  setQuerys({...querys,[e.target.name]:e.target.value})
}

console.log(querys);
  const handleSubmit = (event) => {
    event.preventDefault();
    
    let searchQuerys = `?${createSearchParams(querys)}`
    
    
    dispatch(filterProducts(searchQuerys))

    // axios.get(`/filteredProducts${searchQuerys}`)
    // .then(response => {
    //   setProducts(response.data);
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
        <label>
          Especie:
          <select name='specie' onChange={(e)=>handlerSelect(e)}>
            <option value="Default">Seleccione una especie</option>
            <option value="Cat">Gato</option>
            <option value="Dog">Perro</option>
            <option value="Parrot">Loro</option>
          </select>
        </label>
        <br />
        <label>
          Ordenar por:
          <select name='price' onChange={(e)=>handlerSelect(e)}>
            <option value="Default">elija un orden</option>
            
            <option value="price">Precio</option>
          </select>
        </label>
        <br />
        <label>
          Tipo de orden:
          <select name='sortCriterion' onChange={(e)=>handlerSelect(e)}>
            <option value="Default">Mayo y Menor</option>
            <option value="ASC">Ascendente</option>
            <option value="DESC">Descendente</option>
          </select>
        </label>
        <br />
        <button onClick={handleSubmit}>Filtrar</button>
      {/* </form> */}
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} ({product.specie}) - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterProducts;



















