import React from "react";
import Card from "../CARD/Card";
import { Link } from 'react-router-dom';

const Cards = ({ pets }) => {
  return (
    <div>
      {pets &&
        pets.map((pet, index) => {
          return (
            <Card
              key={index}
              id={pet.id}
              specie={pet.specie}
              gender={pet.gender}
              size={pet.size}
              weighth={pet.weighth}
              age={pet.age}
              adopted={pet.adopted}
              name={pet.name}
              image={pet.image}
            />
          );
        })}
        
        <Link to = "/home">GO HOME</Link>
    </div>
  );
};

export default Cards;
