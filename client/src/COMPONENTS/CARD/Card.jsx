import React from "react";

const Card = ({ mascota }) => {
  const { image, name, breed, height, weight, lifespan, species, adopted } = mascota;

  return (
    <div className="card">
      <img src={image} alt="mascota" />
      <p>{name}</p>
      <p>{breed}</p>
      <p>{height}</p>
      <p>{weight}</p>
      <p>{lifespan}</p>
      <p>{species}</p>
      <p>{adopted ? "Adoptado" : "Disponible"}</p>
    </div>
  );
};

export default Card;