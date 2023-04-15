import React from "react";

const PreviewPetsAdoption = ({ previewPets }) => {
  console.log(previewPets);
  return (
    <div>
      {previewPets?.map((pet, index) => {
        return (
          <div key={index}>
            <h2>Name:{pet.name}</h2>
            <img src={pet.image} alt={pet.name} />
            <h3>Specie:{pet.specie}</h3>
            <h3>Gender:{pet.gender}</h3>
            <h3>Size:{pet.size}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewPetsAdoption;
