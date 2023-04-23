import React from "react";
// import styles from "./SearchResult.module.css";
import { useDispatch } from "react-redux";
import { getPets, setNamePets } from "../../Redux/actions";
import { createSearchParams } from "react-router-dom";



const SearchResult = ({ name }) => {
  const dispatch = useDispatch();
console.log(name);
  const handlerDispatch = () => {
  
    const params = { name };
    dispatch(getPets(`?${createSearchParams(params)}`));
    dispatch(setNamePets())
 console.log(name);
    
   
  };

  return (
    <div  onClick={handlerDispatch}>
      {name}
    </div>
  );
};

export default SearchResult;
