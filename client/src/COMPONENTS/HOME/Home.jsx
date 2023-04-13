import React from "react";
import Card from "../CARD/Card";
import mascotas from "../DATA/Data";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl">PETS IN ADOPTION</h1>
      <div className="card-container">
        {mascotas.map((mascota) => (
          <Card key={mascota.id} mascota={mascota} />
        ))}
      </div>
    </div>
  );
};

export default Home;
