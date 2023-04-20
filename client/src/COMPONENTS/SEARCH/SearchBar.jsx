import React from 'react';
import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getPetsByName} from '../../Redux/actions';


export default function SearchBar() {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state)
  console.log(state.pets);
 
  const [name, setName] = useState("");//representa el valor del texto en la barra de busquedad
  
  

  function handleInputChange(e) {//se ejecuta cuando escribo algo, actualiza el estado name
    e.preventDefault();
    setName(e.target.value);
  }
 
  
  function handleSubmit(e) {//se ejecuta cuando hacemos click en el boton de busquedad
    e.preventDefault();
    if (!name) { //si no ponemos un name ->aparece el msg
      return alert("You must enter a name");

    } else {
      dispatch(getPetsByName(name));//si name no esta vacio->despacha una action->llama a getVideogamesByName pasando name
      setName("");//actualiza el estado name a una cadena vacia y borra el contenido en la barra
      document.getElementById("search").value = "";
    }
  }

  return (
    <div >
      <input
        id="search"
        type="text"
        placeholder="  Type here..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        SEARCH🔎
      </button>
    </div>
  );
}