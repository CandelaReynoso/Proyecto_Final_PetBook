import React from "react";
import { useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { getPets } from "../../Redux/actions";
import Cards from "../CARDS/Cards";


const AvaliblePetsAdoption = () => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  
  useEffect(()=>{
  dispatch(getPets())
  },[dispatch,getPets])
  
  
console.log(state.pets);

  return (
    <div>
      <h2>aca tiene que ir la paginacion osea el componente </h2>
      
      <Cards pets={state.pets.rows}/>
      
    </div>
  );
};

export default AvaliblePetsAdoption;
