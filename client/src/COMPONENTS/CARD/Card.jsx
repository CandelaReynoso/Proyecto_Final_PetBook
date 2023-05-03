import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = (pet) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showDetail, setShowDetail] = useState(false);
  let [selectedPet, setSelectedPet] = useState(null);
  const userEmail = localStorage.getItem("email");
  const [selectedMascota, setSelectedMascota] = useState(null); // create state variable

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleFavorite = async () => {
    //HANDLE LUCAS

    const userId = window.localStorage.getItem("id");

    try {
      axios.post("/favorite", {
        image: pet.image,
        name: pet.name,
        size: pet.size,
        weight: pet.weight,
        age: pet.age,
        gender: pet.gender,
        specie: pet.specie,
        idUser: userId,
        petId: pet.id,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };

  const navigate = useNavigate(); //SELECT NIKI
  const handleSelectMascota = (pet, userEmail) => {
    setSelectedMascota(pet);
    navigate(`/FormAdoption/${pet?.id}`, { pet, userEmail });
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
      <div className="card min-h-[18rem] max-h-[18em] max-w-screen card-side bg-base-100 shadow-xl p-3 mx-2">
        <figure>
          <img
            className="w-[70%] rounded-3xl"
            src={pet?.image}
            alt={pet?.name}
          />
          <div>
            {localStorage.getItem("token") && (
              <button
                onClick={handleFavorite}
                className="btn btn-xs btn-accent"
              ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
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
            <label htmlFor="my-modal-3" className="btn btn-xs btn-primary w-full truncate">
              More about {pet.name}
            </label>
            </button>

            {isLoggedIn && (
              <div className="flex row-auto">
                {/* <Link to={`/FormAdoption/${selectedPet?.id}`}> */}
                <div className="card-actions m-1">
                  <button
                    onClick={handleSelectMascota}
                    className="btn btn-xs btn-accent"
                  >
                    {" "}
                    adopt{" "}
                  </button>
                  {/* {selectedMascota && (
                          <AdoptionForm pet={pet} userEmail={userEmail} />
                        )}{" "}    */}
                  {/* pass selected pet's data as prop */}
                </div>
                {/* </Link> */}


                <div className="card-actions m-1">
                  <button className="btn btn-xs btn-accent">Sponsor</button>
                </div>
              </div>
            )}

            </div>


            {!isLoggedIn && (
              <div className="flex row-auto">
                <div className="card-actions m-1">
                  <button
                    onClick={() => alert("Please log in to adopt this pet.")}
                    className="btn btn-xs btn-accent"
                  >
                    {" "}
                    adopt{" "}
                  </button>
                </div>
                <div className="card-actions m-1">
                  <button className="btn btn-xs btn-accent">Sponsor</button>
                </div>
              </div>
            )}
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