import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AplicationTable from "./AplicationTable";

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

  const handleInputChange =async  (e) => {
    setInput(e.target.value);
   try {
    let response = await axios.get(`/adoptions?name=${e.target.value}`)
    setAdoptions(response.data.adoptions)
   } catch (error) {
    window.alert(error,message)
   }
    
    
  };

  const handlerClick = async() => {
  
  };

  return (
    <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
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
      <button onClick={handlerClick}>🔎</button>

      <table className="w-full text-gray-600">
        {adoptions &&
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
                key={index}
                getAdoptionsRequest={getAdoptionsRequest}
              />
            );
          })}
      </table>
    </div>
  );
};

export default AplicationsRequest;
