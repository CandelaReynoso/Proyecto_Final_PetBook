import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [petData, setPetData] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("/userPets/showHistory");
        setPetData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPets();
  }, []);

  const firstImageIndex = currentImageIndex % petData.length;
  const currentMascotas = [
    petData[firstImageIndex],
    petData[(firstImageIndex + 1) % petData.length],
    petData[(firstImageIndex + 2) % petData.length],
  ];

  useEffect(() => {
    let intervalIds = [];
    const intervalDuration = 9000 / currentMascotas.length;
    
    currentMascotas.forEach((_, index) => {
      intervalIds.push(setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % petData.length
        );
      }, intervalDuration));
    });

    return () => {
      intervalIds.forEach(clearInterval);
    };
  }, [currentImageIndex, currentMascotas, petData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % petData.length
      );
    }, 9000);
    return () => clearInterval(interval);
  }, [petData]);

  const handleImageClick = (pet) => {
    setSelectedPet(pet);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % petData.length
    );
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + petData.length - 1) % petData.length
    );
  };

  const handleMouseOver = (pet) => {
    setSelectedPet(pet);
    setAutoPlay(false);
  };

  const handleMouseOut = () => {
    setSelectedPet(null);
    setAutoPlay(true);
  };

  return (
    <div>
      {petData.length > 0 ? (
        <div className="mx-auto ">
          <div className="carousel carousel-end rounded-box h-[8rem] w-screen lg:h-[13rem] mx-auto my-auto  justify-evenly px-12">
            {currentMascotas.map((pet, index) => (
              <div
                key={index}
                className={`carousel-item${
                  index === 0 ? " active" : ""
                } relative float-left md:w-1/3 hover:scale-160`}
             

              >
                <div
                  className="w-full h-full flex justify-center items-center cursor-pointer"
                  onMouseOver={() => handleMouseOver(pet)}
                  onMouseOut={() => handleMouseOut()}
                  onClick={() => handleImageClick(pet)}
                >
                  <img
                    className="w-full h-full object-cover rounded-3xl hover:scale-200"
                    src={pet.image}
                    alt={`Image ${currentImageIndex + 1}`}
                  />

                  {selectedPet === pet && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col p-4 bg-white bg-opacity-70">
                      <div className="font-serif font-semibold text-1xl text-black text-center mb-2">
                        {pet.history}
                      </div>
                     <div className="font-serif font-semibold text-1xl text-black text-center mb-2">
                       {pet.user.nickname.toUpperCase()}
                 </div>

                    </div>

                  )}
                </div>
              </div>
            ))}
          

          </div>
          <div className="absoulte flex transform p-2 items-center justify-center">
            <a onClick={handlePrevClick} className="btn btn-sm btn-circle btn-accent">
 ❮</a> 
            <a onClick={handleNextClick} className="btn btn-sm btn-circle btn-accent">❯</a>
          </div>
        </div>
      ) : (
        <p className="text ml-3">We are uploading the adoption stories... </p>
      )}
    </div>
  );
}

export default Carousel;
