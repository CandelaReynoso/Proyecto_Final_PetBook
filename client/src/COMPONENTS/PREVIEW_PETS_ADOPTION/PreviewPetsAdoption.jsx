import React from "react";

const PreviewPetsAdoption = ({ previewPets }) => {
 
  return (
    <div  >
      {previewPets?.map((pet, index) => {
        return (
          
          <div className="card card-side bg-base-100 shadow-xl p-3 m-3 h-[40vh]" key={index}>

            <figure> <img className="h-[40vh] w-" src={pet.image} alt={pet.name} /> </figure>
   
          <div className="card-body">
            
            <div>
              <h2 className="card-title text font-[candara]">Name: <a className="">{pet.name}</a></h2>
              <p className="text"> <a className="italic"> Specie:</a> {pet.specie}</p>
              <p className="text"><a className="italic"> Gender:</a> {pet.gender}</p>
              <p className="text"><a className="italic"> Size:</a> {pet.size}</p>
            </div>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default PreviewPetsAdoption;

