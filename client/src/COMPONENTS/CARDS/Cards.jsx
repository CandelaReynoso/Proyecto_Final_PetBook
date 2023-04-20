import React from "react";
import Card from "../CARD/Card";
import { Link } from 'react-router-dom';
import styles from '../CARDS/Cards.module.css';

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
        <div>
        </div>
    </div>
  );
};

export default Cards;
