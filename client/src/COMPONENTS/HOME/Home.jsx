import React from "react";
import Card from "../CARD/Card";
import mascotas from "../DATA/Data";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to = "/card"><h1 className="text-3xl">PETS IN ADOPTION</h1></Link>
    </div>
  );
};

export default Home;
