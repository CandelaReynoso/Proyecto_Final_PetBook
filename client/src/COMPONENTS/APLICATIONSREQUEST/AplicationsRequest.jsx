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
  const [adoptions, setAdoptions] = useState();
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

      <table className="w-full text-gray-600">
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
              />
            );
          })
        )}
      </table>
      <div>    
    <button id="buttonmodal" class="focus:outline-none p-2 bg-blue-600 text-white bg-opacity-75 rounded-lg ring-4 ring-indigo-300" type="button">Open modal</button>
</div>

<div id="modal"
    class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-500 bg-opacity-50 transform scale-0 transition-transform duration-300"> 

    <div class="bg-white w-1/2 h-1/2 p-12"> 
        
        <button id="closebutton" type="button" class="focus:outline-none">
          
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
     
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Minus placeat maiores repudiandae, error perferendis inventore 
            aspernatur voluptatum omnis sint debitis!
        </p>
    </div>
</div>




      
    </div>
  );
};

export default AplicationsRequest;




{/* <script> 
    const button = document.getElementById('buttonmodal')
    const closebutton = document.getElementById('closebutton')
    const modal = document.getElementById('modal')

    button.addEventListener('click',()=>modal.classList.add('scale-100'))
    closebutton.addEventListener('click',()=>modal.classList.remove('scale-100'))
</script> */}
