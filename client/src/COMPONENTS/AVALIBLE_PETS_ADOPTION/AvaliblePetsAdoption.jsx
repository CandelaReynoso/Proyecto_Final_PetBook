import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPets } from "../../Redux/actions";
import Cards from "../CARDS/Cards";
import Header from "../HEADER/Header";
import Footer from "../FOOTER/Footer";
import styles from "../CARD/Card.module.css";
import SearchBar from "../SEARCH/SearchBar";
import Pagination from "../PAGINATION/Pagination";
import FilterAndOrder from "../FILTER_AND_ORDER/FilterAndOrder";
import SearchResultsList from "../SEARCH/SearchResultList";
import { createSearchParams } from "react-router-dom";

const AvaliblePetsAdoption = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    let query = window.localStorage.getItem("lastQuerys");
    let parseQuery = JSON.parse(query);
    
    if (!query) {
      dispatch(getPets());
      return;
    }
    if (parseQuery !== undefined) {
      dispatch(getPets(`?${createSearchParams(parseQuery)}`));
    }
    if (parseQuery === undefined) {
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    return () => {
      let querys = state?.pets?.params;
      
      if (querys !== undefined) {
        window.localStorage.setItem("lastQuerys", JSON.stringify(querys));
      } else return;
    };
  }, [state.pets.params]);

  const onclickRefresh = () => {
    dispatch(getPets());
  };

  return (
    <div>
      <Header></Header>

      <FilterAndOrder />
      {/* esto es de la search */}
      <SearchBar />
      {state?.namePets?.length > 0 && <SearchResultsList />}
      {/* si se mueve esto a otro componente importar searchBar y searchResultList y ponerlo en este orden*/}

      <button onClick={onclickRefresh}>Refresh</button>
      <div className={styles.divPagination}>
        <Pagination />
      </div>
      <Cards pets={state?.pets?.data} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.divContainer}>
        <div className={styles.text}>
          <p>
            ADOPT <br></br>
            TODAY
            <br></br>AND
            <br></br>CHANGE
            <br></br>A LIFE
          </p>
        </div>
        <div>
          <ul>
            <li className={styles.list}>
              FIND A FRIEND YOU WISH TO TAKE HOME.
            </li>
            <li className={styles.list}>
              GO THROUGH OUR ADOPTION REQUIREMENTS.
            </li>
            <li className={styles.list}>SCHEDULE A VISIT TO THE SHELTER.</li>
            <li className={styles.list}>
              MEET THE PET AND COMPLETE THE PROCEDURE.
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AvaliblePetsAdoption;
