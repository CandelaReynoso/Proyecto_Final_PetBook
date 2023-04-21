import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams } from "react-router-dom";

import { getPets } from "../../Redux/actions.js";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState(""); //representa el valor del texto en la barra de busquedad

  function handleInputChange(e) {
    //se ejecuta cuando escribo algo, actualiza el estado name
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    //se ejecuta cuando hacemos click en el boton de busquedad
    e.preventDefault();
    if (!name) {
      //si no ponemos un name ->aparece el msg
      return alert("You must enter a name");
    } else {
      const params = { name };
    dispatch(getPets(`?${createSearchParams(params)}`));

      setName(""); //actualiza el estado name a una cadena vacia y borra el contenido en la barra
      document.getElementById("search").value = "";
    }
  }

  return (
    <nav>
      <input
        id="search"
        type="text"
        placeholder="  Type here..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        SEARCH🔎
      </button>
    </nav>
  );
}
