import React from "react";
import { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import axios from "axios";
import AplicationTable from "./AplicationTable";
import { Link } from "react-router-dom";
import { aplicationRequest } from "../../Redux/actions";

const AplicationsRequest = () => {
  const [adoptions, setAdoptions] = useState();
  const [input, setInput] = useState("");
  const state = useSelector((state)=>state)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(aplicationRequest())
  }, []);

  const handleInputChange = async (e) => {
    setInput(e.target.value);
    try {
      let response = await axios.get(`/adoptions?name=${e.target.value}`);
      if (response.data.adoptions.length) {
        setAdoptions(response.data.adoptions);
      } else {
        return;
      }
    } catch (error) {
      window.alert(error, message);
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
    </div>
  );
};

export default AplicationsRequest;
