import React from "react";
import { useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { getPets } from "../../Redux/actions";
import Cards from "../CARDS/Cards";
import Header from "../HEADER/Header";
import Footer from "../FOOTER/Footer";
import styles from '../CARD/Card.module.css';
import SearchBar from "../SEARCH/SearchBar";




const AvaliblePetsAdoption = () => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  
  useEffect(()=>{
  dispatch(getPets())
  },[dispatch,getPets])
  
  
// console.log(state.pets);

  return (
    <div>
    
    
      <h2 >{/* aca tiene que ir la paginacion osea el componente */} </h2>
      <Header></Header>
      <SearchBar/>
       <Cards pets={state?.pets?.rows? state.pets.rows : state.pets}/> 
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <div className={styles.divContainer}> 
          <div className={styles.text}>
            <p>ADOPT <br></br> 
            TODAY 
            <br></br>AND 
            <br></br>CHANGE
            <br></br>A LIFE</p>
          </div>
          <div>
            <ul>
              <li className={styles.list}> 
              FIND A FRIEND YOU WISH TO TAKE HOME.
              </li>
              <li className={styles.list}>
              GO THROUGH OUR ADOPTION REQUIREMENTS.
              </li>
              <li className={styles.list}>
              SCHEDULE A VISIT TO THE SHELTER.
              </li>
              <li className={styles.list}>
              MEET THE PET AND COMPLETE THE PROCEDURE.
              </li>
            </ul>
          </div></div>
      <Footer></Footer>
    </div>
  );
};

export default AvaliblePetsAdoption;
