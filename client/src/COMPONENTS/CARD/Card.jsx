import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getPets } from "../../Redux/actions";
// import styles from "../CARD/Card.module.css";
import AdoptionForm from "../FORMS/FormAdoption";
import axios from "axios";

const Card = (pet) => {
  // const [isFav, setIsFav] = useState();
  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  
  // no se esta usando lo comento porque me da toc ver tantas cosas sin usar jaja

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const myFavorites = useSelector((state) => state.favorites);
  // const pets = useSelector((state) => state.pets);
  const [showDetail, setShowDetail] = useState(false);
  let [selectedPet, setSelectedPet] = useState(null);
  const userEmail = localStorage.getItem("email");
  const [selectedMascota, setSelectedMascota] = useState(null); // create state variable


  const [isFavorite, setIsFavorite] = useState(false);



  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // const handleFavorite = () => {                  //HANDLE LUCAS
  //   try {
  //     const userId = window.localStorage.getItem("id");
  //     axios.post("/favorite", {
  //       image: pet.image,
  //       name: pet.name,
  //       size: pet.size,
  //       weight: pet.weight,
  //       age: pet.age,
  //       gender: pet.gender,
  //       specie: pet.specie,
  //       idUser: userId,
  //     });
  //   } catch (error) {
  //     window.alert(error.message);
  //   }
  // };

  const handleFavorite = () => {
    try {
      const userId = window.localStorage.getItem("id");
      if (isFavorite) {
        axios.delete(`/favorite?idUser=${userId}&idPet=${pet.id}`); //hay un bug, no se elimina correctamente! 
      } else {
        axios.post("/favorite", {
          image: pet.image,
          name: pet.name,
          size: pet.size,
          weight: pet.weight,
          age: pet.age,
          gender: pet.gender,
          specie: pet.specie,
          idUser: userId,
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      window.alert(error.message);
    }
  };
  

  const handleSelectMascota = (e) => {
    e.preventDefault();
    setSelectedMascota(pet); // update state variable with pet's data
  };

  const handleShowDetail = () => {
    setSelectedPet(pet); // guardamos los datos de la mascota seleccionada en el estado selectedPet
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    selectedPet = null;
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl p-3 m-2">
        <figure>
          <img
            className="w-4/5 rounded-3xl"
            src={pet?.image}
            alt={pet?.name}
          />
          <div>
            {localStorage.getItem("token") && (
              <button onClick={handleFavorite}>{isFavorite ? '💚' : '🤍'}</button>
            )}

         
          </div>
         
        </figure>
        <div className="card-body">
          <h2 className="card-title subtitle">{pet?.name?.toUpperCase()}</h2>
          <p className="text">
            gender: {pet?.gender}
            <br />
            age: {pet?.age}
            <br />
          </p>
          <div className="card-actions justify-center">
            <button onClick={handleShowDetail}>
              <label htmlFor="my-modal-3" className="btn btn-xs btn-primary">
                More about {pet.name}
              </label>
            </button>
            <div className="flex row-auto">

            <Link to={`/FormAdoption/${selectedPet?.id}`}>
                      <div className="card-actions m-1">
                        <button  onClick={handleSelectMascota} className="btn btn-xs btn-accent"> adopt </button>
                        {selectedMascota && (
                          <AdoptionForm pet={pet} userEmail={userEmail} />
                        )}{" "}   {/* pass selected pet's data as prop */}
                      </div>
                    </Link>

                    <div className="card-actions m-1">
                      <button className="btn btn-xs btn-accent">Sponsor</button>
                    </div>
            </div>

          </div>
        </div>
      </div>

      {showDetail && (
        <div>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative max-w-[18rem] sm:max-w-[32rem]">
              <label
                htmlFor="my-modal-3"
                onClick={handleCloseDetail}
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>

              <div className="">
                {/* <figure className="w-2/3"><img className="card-body" src={pet.image} alt={pet.name} /></figure> */}
                <div>
                  <h2 className="titleCenter">{pet.name}</h2>
                  <ul className="text bg-primary w-fit rounded-full max-w-lg mx-auto">
                    <div className="text-center">
                      <h2>{selectedPet?.name}</h2>
                      <li>Specie: {selectedPet?.specie}</li>
                      <li>Gender: {selectedPet?.gender}</li>
                      <li>Size: {selectedPet?.size}</li>
                      <li>Weight: {selectedPet?.weight} kg</li>
                      <li>Age: {selectedPet?.age} years</li>
                      <li>
                        {selectedPet?.adopted
                          ? "Is already adopted"
                          : "Is still waitng for a home"}
                      </li>
                    </div>
                  </ul>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
