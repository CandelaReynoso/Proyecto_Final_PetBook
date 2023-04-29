import React from "react";

//componente donde se renderiza la info de cada card individual
//cada iteracion del map de coponente anterior renderiza una nueva card con informacion unica por eso se hace de esta forma
//si necesito crear botones o fucionalidades para cada card pero q
//a su vez generar de manera dinamica x cantidades se hace asi
// para poder pasarle en ese caso el id de las mascotas a cada card para poder hacer el delete

const CardFavorite = (props) => {
  return (
    <div key={props?.index}>
      <h1>{props?.name}</h1>
      <div>
        <button onClick={() => props?.handlerDelete(props.petId)}>X</button>
        <img src={props?.image} alt="pets" />
      </div>
      <h2>{props?.specie}</h2>
      <h2>{props?.size}</h2>
      <h3>{props?.weight}</h3>
      <h3>{props?.age}</h3>
      <h4>{props?.gender}</h4>
    </div>
  );
};

export default CardFavorite;
