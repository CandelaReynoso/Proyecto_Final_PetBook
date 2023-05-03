import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import AplicationTable from "./AplicationTable";
import { Link } from "react-router-dom";
import {
  aplicationRequest,
  searchAplicationRequest,
} from "../../Redux/actions";



const AplicationsRequest = () => {
  
  const [input, setInput] = useState("");
  
 
  
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(aplicationRequest());
  }, []);

  const handleInputChange = async (e) => {
    setInput(e.target.value);
    try {
      dispatch(searchAplicationRequest(e.target.value));
    } catch (error) {
      window.alert(error.message);
    }
  };
  
 
  

  return (
    <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
      <Link to={"/admin"}>
        <button>back</button>
      </Link>
      <div>
        <h1>search</h1>
      </div>

      <input
        type="text"
        placeholder="type to search..."
        value={input}
        autoComplete="off"
        onChange={(e) => handleInputChange(e)}
      />
 <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        {/* gif pedorro provisorio si queres podes cambiarlo por otro q quieras */}
        {!state?.requestAdoption ? (
          <img src="https://media.tenor.com/1qrYT711uEoAAAAC/cargando.gif" />
        ) : (
        
          state?.requestAdoption?.map((adopt, index) => {
            return (
              <AplicationTable
                id={adopt.id}
                userId={adopt.userId}
                name={adopt.name}
                email={adopt.email}
                address={adopt.address}
                postalCode={adopt.postalCode}
                age={adopt.age}
                facebook={adopt.facebook}
                instagram={adopt.instagram}
                petId={adopt.petId}
                petName={adopt.pet.name}
                petSpecie={adopt.pet.specie}
                petImage={adopt.pet.image}
                petAge={adopt.pet.age}
                key={index}
                index={index}
              />
            );
          })
        )}
      </table>
      </div>
      <div>    
    
</div>


 </div>
  );
};

export default AplicationsRequest;




