import React from "react";

//componente donde se renderiza la info de cada card individual
//cada iteracion del map de coponente anterior renderiza una nueva card con informacion unica por eso se hace de esta forma
//si necesito crear botones o fucionalidades para cada card pero q
//a su vez generar de manera dinamica x cantidades se hace asi
// para poder pasarle en ese caso el id de las mascotas a cada card para poder hacer el delete

const CardFavorite = (props) => {
  return (
    
    
    <div className="card card-side bg-base-100 shadow-xl p-2 m-3 h-fit"  key={props?.index}>
    
      <div className="flex items-center justify-center">       
       <figure> <img  className="w-[7rem] mx-2 rounded-3xl" src={props?.image} alt="pets" /> </figure>
      </div>
      <div className="card-body">
          <h1 className="card-title subtitle justify-center">{props?.name}</h1>
          
          <ul className="text bg-primary w-fit rounded-full max-w-lg mx-auto">
                    <div className="text-center">
                     
                      <li>Specie: {props?.specie}</li>
                      <li>Gender: {props?.gender}</li>
                      <li>Size: {props?.size}</li>
                      <li>Weight: {props?.weight} kg</li>
                      <li>Age: {props?.age} years</li>
                    </div>
            </ul>
          
      </div>
      <button className="btn btn-circle btn-xs" onClick={() => props?.handlerDelete(props.petId)}>X</button>
    </div>
   
  );
};

export default CardFavorite;
