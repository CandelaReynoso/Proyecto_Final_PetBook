import React, { useState } from 'react';
import axios from 'axios';
import { createSearchParams } from "react-router-dom";

function FilterProducts() {
  // const [specie, setSpecie] = useState('');
  // const [typeOrder, setTypeOrder] = useState('');
  // const [sort, setSort] = useState('');
  const [products, setProducts] = useState([]);

const [querys, setQuerys] = useState()



const handlerSelect = (e) =>{
  if (e.target.value === "Default") return;
  
  setQuerys({...querys,[e.target.name]:e.target.value})
}

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get('/filteredProducts', {
      params: {
        specie: specie,
        typeOrder: typeOrder,
        sort: sort
      }
    })
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
        <label>
          Especie:
          <select name='specie' onChange={(e)=>handlerSelect(e)}>
            <option value="Default">Seleccione una especie</option>
            <option value="cat">Gato</option>
            <option value="dog">Perro</option>
            <option value="parrot">Loro</option>
          </select>
        </label>
        <br />
        <label>
          Ordenar por:
          <select name='typeOrder' onChange={(e)=>handlerSelect(e)}>
            <option value="Default">Seleccione un criterio de ordenamiento</option>
            <option value="name">Nombre</option>
            <option value="price">Precio</option>
          </select>
        </label>
        <br />
        <label>
          Tipo de orden:
          <select name='sort' onChange={(e)=>handlerSelect(e)}>
            <option value="Default">Seleccione un tipo de orden</option>
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



















