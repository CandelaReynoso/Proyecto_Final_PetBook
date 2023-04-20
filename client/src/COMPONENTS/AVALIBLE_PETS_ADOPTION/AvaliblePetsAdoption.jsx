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





const AvaliblePetsAdoption = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
  
    dispatch(getPets());
  }, []);

  const onclickRefresh = () => {
    dispatch(getPets());
  };

  return (
    <div>
      <Header></Header>
      
       <FilterAndOrder/>
       <SearchBar />
     
      <button onClick={onclickRefresh}>Refresh</button>
      <div className={styles.divPagination}>
        <Pagination  />
      </div>
      <Cards pets={state?.pets?.data } />
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
