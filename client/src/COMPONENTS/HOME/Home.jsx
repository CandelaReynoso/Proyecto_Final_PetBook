import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import Header from '../HEADER/Header';
import mascotas from '../DATA/Data';
import Footer from '../FOOTER/Footer';
import { getPetsRandom } from "../../Redux/actions";
import PreviewPetsAdoption from "../PREVIEW_PETS_ADOPTION/PreviewPetsAdoption";
import { Button } from "@mui/material";



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
      currentImageIndex === images.length - 1
        ? 0
        : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex =
      currentImageIndex === 0
        ? images.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  
  const mascotasFiltradas = mascotas.filter(mascota => mascota.adopted);
  const images = mascotasFiltradas.map(mascota => mascota.image);
  const currentMascota = mascotasFiltradas[currentImageIndex];


  return (
    <div>

      {/* HEADER */}
     <Header className="mb-4"/>

     {/* CARRUSEL */}
  {mascotasFiltradas.length > 0 ? (
  <div className='container my-24 px-6 mx-auto'>
  <section className="mb-32 text-gray-800 text-center">
    <h2 className="text-3xl font-bold mb-12">ADOPTION STORIES</h2>

    <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-carousel='slide'>
    <div className="carousel-inner relative w-full overflow-hidden">
     <div class="carousel-item active relative float-left w-full">
    <img class="rounded-full shadow-lg mb-6 mx-auto h-80 w-80"
      src={currentMascota.image}
      alt={`Image ${currentImageIndex + 1}`}
    />
    <div class='flex flex-wrap justify-center'>
    <div class="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
    <h5 class="text-lg font-bold mb-3">{currentMascota.name}</h5>
  </div>
  </div>
  </div>
    </div>

      <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        onClick={handlePrevClick}
        type="button"
        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   <span className="carousel-control-prev-icon inline-block bg-no-repeat text-7xl" aria-hidden="true"></span>
        <span className="visually-hidden">❮</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        onClick={handleNextClick}
        type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon inline-block bg-no-repeat text-7xl" aria-hidden="true"></span>
        <span class="visually-hidden">❯</span>
      </button>
    </div>

  </section>

</div>
) : (
  <p>No hay mascotas disponibles</p>
)}
  
{/* COMPONENTE ABOUT */}

  <div className='flex flex-row flex-wrap items-center justify-center pt-5 bg-green-200'>
  <h5 className="text-7xl text-orange-600 italic font-bold tracking-wide order-2 sm:order-1" style={{marginLeft: '200px'}}>WE ARE... </h5>
  <img 
  src='../../public/LoginImg.png' style={{maxWidth: '600px', maxHeight: '600px'}}
  />
   <div className="contain mx-auto bg-green-200 order-1 sm:order-2 flex-1 mr-35 max-w-xl">
    <h2 className='lead text-left text-black whitespace-nomral text-2xl mb-7' style={{marginRight: '30px'}}>
    Welcome to <a className='font-bold italic'>PETBOOK</a>,
     we are dedicated to providing information about animals for adoption. 
     Here you can adopt or sponsor a pet so that it finds a home full of love.
      We have a section where you can make donations and receive information about each pet. 
      You can also buy products in our store. Join our community! </h2>
    <div>
      <Link to='/about'>
        <button className="w-2/6 my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">MORE ABOUT US</button>
      </Link>
    </div>
  </div>
</div>

  
    {/*CARDS DE ANIMALES EN ADOPCION */}
    <div className='flex flex-row flex-wrap items-center justify-center pt-5'>
  <div className="w-full md:w-1/2">
    <PreviewPetsAdoption previewPets={state.petsRandomHome && state.petsRandomHome} />
  </div>
  <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
    <h2 className="text-7xl text-orange-600 italic font-bold tracking-wide mb-5">READY TO GO HOME...</h2>
    <Link to ="/AvaliblePetsAdoption">
      <button className="w-20 my-10 py-1 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">MORE</button> 
    </Link> 
  </div>
</div>



  
  {/*COMPONENTE DONACIONES */}
  <div className='flex flex-row flex-wrap items-center justify-center pt-5 bg-green-200'>
  <h1 className="text-7xl text-orange-600 italic font-bold tracking-wide order-2 sm:order-1" style={{marginLeft:'200px'}}>HELP US... </h1>
  <img
  src='../../public/RegisterImg.png' style={{maxWidth: '600px', maxHeight: '600px'}}
  />
  <div className="contain mx-auto bg-green-200 order-1 sm:order-2 flex-1 mr-20">
    <h2 className='lead text-left text-black whitespace-nomral text-2xl mb-7' style={{marginRight: '30px'}}>
    Your generous contribution can make a difference 
    in the lives of pets in 
    need and help them find their 
    forever homes. 
    By donating, you will join other animal lovers who share the same mission
    of providing a safe haven for all pets.
    You can donate one time
    </h2>
    <div>
      <h3 className='lead text-left text-black whitespace-nomral text-2xl mb-7' style={{marginRight: '30px'}}> You can sponsor a pet</h3>
      <Link to='/donatcion'>
        <button className="w-2/6 my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">SPONSOR A PET</button>
      </Link>
      <h3 className='lead text-left text-black whitespace-nomral text-2xl mb-7' style={{marginRight: '30px'}}> Donate One Time</h3>
      <Link to='/donation'>
      <button style={{ marginBottom: '30px' }} className="w-2/6 my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">DONATE FOR A ONE TIME</button>
      </Link>
    </div>
  </div>
</div>

    {/* FOOTER */}
      <Footer className="mt-8"/>

    </div>
  );
};

export default Home;

