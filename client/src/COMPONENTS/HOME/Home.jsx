import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import Header from '../HEADER/Header';
import mascotas from '../DATA/Data';
import Footer from '../FOOTER/Footer';
import { getPetsRandom } from "../../Redux/actions";
import PreviewPetsAdoption from "../PREVIEW_PETS_ADOPTION/PreviewPetsAdoption";
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';


const Home = () => {

  //CARTAS DE ADOPCION:

 const dispatch = useDispatch();
  const state = useSelector((state) => state);
  
  useEffect(() => {
    dispatch(getPetsRandom());
  }, [dispatch]);

  // const itemsToShow = pets?.rows?.slice(0, 2);
  
// CARRUSEL:
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const handleNextClick = () => {
  const nextIndex =
    currentImageIndex === images.length - 3
      ? 0
      : currentImageIndex + 1;
  setCurrentImageIndex(nextIndex);
};

const handlePrevClick = () => {
  const prevIndex =
    currentImageIndex === 0
      ? images.length - 3
      : currentImageIndex - 1;
  setCurrentImageIndex(prevIndex);
};

const mascotasFiltradas = mascotas.filter(mascota => mascota.adopted);
const images = mascotasFiltradas.map(mascota => mascota.image);
const currentMascotas = mascotasFiltradas.slice(currentImageIndex, currentImageIndex + 3);

// UseEffect para hacer el carrusel automático
useEffect(() => {
  const interval = setInterval(() => {
    handleNextClick();
  }, 6000); // cambiar el valor  para ajustar la velocidad del carrusel

  return () => clearInterval(interval);
}, [currentImageIndex]); // volver a llamar el useEffect cuando currentImageIndex cambie


  return (
    <div>

      {/* HEADER */}

     <Header className="mb-4"/>

 {/* CARRUSEL */}

 {mascotasFiltradas.length > 0 ? (
   <div className='container my-24 px-6 mx-auto'>
    
      <h2 className="font-bold text-secondary text-4xl uppercase tracking-widest leading-loose text-center">ADOPTION STORIES</h2>

          
            <div className="carousel carousel-end rounded-box w-50 h-50 mt-10">
          {currentMascotas.map((mascota, index) => (
           <div key={index} className={`carousel-item${index === 0 ? " active" : ""} relative float-left md:w-1/3`}>
           {/*  se utiliza para establecer la clase active en el primer elemento del carrusel. La clase active se utiliza para indicar cuál es la imagen actualmente visible en el carrusel*/}
           
           
           <img className="carousel-item object-cover rounded-md cursor-pointer transform:rotate-180"
             src={mascota.image}
             alt={`Image ${currentImageIndex + 1}`}
           />
              </div>
            ))}
            </div>
      
        <div className="flex justify-center mt-4 mb-30">
          <button className="carousel-control-prev" onClick={handlePrevClick}>
          <span className="visually-hidden text-5xl text-black hover:bg-green-200 focus:bg-green-200 left-0 transition-all duration-300 inline-block transform scale-100"><BiLeftArrow/></span>
        </button>
         <button className="carousel-control-next" onClick={handleNextClick}>
     <span className="visually-hidden text-5xl text-black hover:bg-green-200 focus:bg-green-200 left-0 transition-all duration-300 inline-block transform scale-100"><BiRightArrow/></span>
     </button>
</div>
      </div>
    ) : (
      <p>No hay mascotas disponibles</p>
    )}

  
{/* COMPONENTE ABOUT */}

<div className="grid grid-cols-2 gap-2 bg-green-200 h-70">
  <div>
    <h5 className="titleCenter mt-10">WE ARE...</h5>
    <img src='../../public/perritoabout.png' className="-mb-20 -mt-10 w-80 h-85 ml-80"/>
  </div>
  <div>
    <h2 className="text text-2xl indent-8  leading-loose mt-20 ml-5 mr-40 mb-20"> Welcome to <a className='font-bold italic'>PETBOOK</a>, we are dedicated to providing information about animals for adoption. Here you can adopt or sponsor a pet so that it finds a home full of love. We have a section where you can make donations and receive information about each pet. You can also buy products in our store. </h2>
    <Link to='/about'>
      <button className="buttonSmallBlack">MORE ABOUT US</button>
    </Link>
  </div>
</div>

  
    {/*CARDS DE ANIMALES EN ADOPCION */}

  <div className='flex flex-row flex-wrap items-center justify-center pt-5 mt-20 mb-20'>
  <div className="w-20 md:w-1/2 h-200 items-center justify-center">
    <PreviewPetsAdoption previewPets={state.petsRandomHome && state.petsRandomHome} />
  </div>
  <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
    <h2 className="titleCenter">READY TO 
    <br></br> 
    GO HOME...</h2>
    <Link to ="/AvaliblePetsAdoption">
      <button className="buttonSmallgreen">MORE</button> 
    </Link> 
  </div>
</div>


  {/*COMPONENTE DONACIONES */}

  <div className="grid grid-cols-2 gap-2 bg-green-200 h-70 mt-20">
  <div>
    <h5 className="titleCenter mt-10">HELP US...</h5>
    <img src='../../public/helpme.png' className="-mt-10 -mb-5 w-100 h-100 ml-60 "/>
  </div>
  <div>
    <h2 className="text text-2xl indent-8  leading-loose mt-20 ml-5 mr-40 mb-8">Your generous contribution can make a difference in the lives of pets in need and help them find their forever homes. 
    By donating, you will join other animal lovers who share the same mission of providing a safe haven for all pets. 
    You can donate one time or sponsor a pet.
    <br></br>
    <a className='font-bold italic'>JOIN OUR COMMUNITY!</a>
    </h2>
    <Link to ="/">
      <button className="buttonSmallBlack uppercase inline-block py-2 px-4 mr-20 rounded">SPONSOR A PET</button> 
    </Link> 
    <Link to='/donate'>
     <button className="buttonSmallBlack uppercase inline-block py-2 px-4 mr-20 rounded">DONATE FOR A ONE TIME</button>
     </Link>
  </div>
  </div>


  <div className="mx-auto mt-20 bg-white w-4/5"></div>

    {/* FOOTER */}
      <Footer className="mt-8"/>

    
    </div>
  );
};

export default Home;

