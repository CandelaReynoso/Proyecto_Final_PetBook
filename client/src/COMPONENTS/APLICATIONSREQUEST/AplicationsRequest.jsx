import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AplicationTable from "./AplicationTable";
import { Link } from "react-router-dom";

const AplicationsRequest = () => {
  const [adoptions, setAdoptions] = useState();
  const [input, setInput] = useState("");

  const getAdoptionsRequest = async () => {
    let request = await axios(`/adoptions`);
    setAdoptions(request?.data?.adoptions);
  };

  useEffect(() => {
    getAdoptionsRequest();
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
        {!adoptions ? (
          <img src="https://media.tenor.com/1qrYT711uEoAAAAC/cargando.gif" />
        ) : (
          adoptions?.map((adopt, index) => {
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
                getAdoptionsRequest={getAdoptionsRequest}
              />
            );
          })
        )}
      </table>
    </div>
  );
};

export default AplicationsRequest;
