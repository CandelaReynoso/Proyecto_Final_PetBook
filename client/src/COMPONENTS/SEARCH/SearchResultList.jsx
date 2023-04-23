import React from "react";
import SearchResult from "./SearchResult";
import styles from "./SearchResultsList.module.css";
import { useSelector } from "react-redux";

const SearchResultsList = () => {
  const state = useSelector((state) => state);
  
  return (
    <div
      className={ 
        !state.namePets.length >0
          ? styles.hideResult 
          : styles.resultsList 
      } 
    >  
      {state.namePets.map((pet, index) => {
   
        return <SearchResult  name={pet} key={index} />; //
      })}
    </div>
  );
};

export default SearchResultsList;