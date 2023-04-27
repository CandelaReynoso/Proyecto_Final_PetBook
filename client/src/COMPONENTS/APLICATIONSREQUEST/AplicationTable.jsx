import React, { useEffect, useState } from "react";
import axios from "axios";

const AplicationTable = ({userId,name,email,address,postalCode,age,facebook,instagram,petId,key}) => {

    const [adoptionPets, setAdoptionPets] = useState();

useEffect(()=>{
    async function getAdoptionsPets() {
        let request = await axios(`/pets/detail/${petId}`)
        console.log(request)
        setAdoptionPets(request?.data)
       }
      getAdoptionsPets();
},[])

console.log(adoptionPets);


  return <>
  
   <h2>Postulante {name}</h2>
       <tbody key={key}>
          <tr>
            <td className="py-2">user name</td>
            <td className="text-gray-500">{name}</td>
            <td>name pet</td>
            <td>{adoptionPets?.name}</td>
            <img className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" src={adoptionPets?.image} alt="" />
            
          </tr>
          
          <tr>
            <td className="py-2">email</td>
            <td className="text-gray-500">{email}</td>
            <td>specie</td>
            <td>{adoptionPets?.specie}</td>
            
          </tr>
          
          <tr>
            <td className="py-2">address</td>
            <td className="text-gray-500">{address}</td>
            <td>age</td>
            <td>{adoptionPets?.age}</td>
            
          </tr>
          
          <tr>
            <td className="py-2">postalCode</td>
            <td className="text-gray-500">{postalCode}</td>
            
           
            
          </tr>
          
          <tr>
            <td className="py-2">age</td>
            <td className="text-gray-500">{age}</td>
            
          </tr>
          
          <tr>
            <td className="py-2">facebook</td>
            <td className="text-gray-500">{facebook}</td>
            
          </tr>
          
          <tr>
            <td className="py-2">instagram</td>
            <td className="text-gray-500">{instagram}</td>
            
          </tr>
          
          <tr>
            <td className="py-2">name</td>
            <td className="text-gray-500">{name}</td>
            
          </tr>
        </tbody> 
        
        <button>aceptar</button>
        <br />
        <button> rechazar</button>

  
  
  </>;
};

export default AplicationTable;
