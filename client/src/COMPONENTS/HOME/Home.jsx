import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import Header from '../HEADER/Header';
import mascotas from '../DATA/Data';
import Footer from '../FOOTER/Footer';
import { getPetsRandom } from "../../Redux/actions";
import PreviewPetsAdoption from "../PREVIEW_PETS_ADOPTION/PreviewPetsAdoption";


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
     <Header class="mb-4"/>

      {/* CARRUSEL */}
  {mascotasFiltradas.length > 0 ? (
  <div class='container my-24 px-6 mx-auto'>
  <section class="mb-32 text-gray-800 text-center">
    <h2 class="text-3xl font-bold mb-12">ADOPTION STORIES</h2>

    <div id="carouselExampleCaptions" class="carousel slide relative carousel-dark" data-bs-ride="carousel">
    <div class="carousel-inner relative w-full overflow-hidden">
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
   <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        onClick={handleNextClick}
        type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </section>

</div>
) : (
  <p>No hay mascotas disponibles</p>
)}
  

<div class='contain mx-auto bg-green-200 shadow" '>
  <h5 class="text-3xl font-bold mb-12 text-bg" >WE ARE</h5>
  <h2>Welcome to PETBOOK, we are dedicated to providing information about animals for adoption. Here you can adopt or sponsor a pet so that it finds a home full of love. We have a section where you can make donations and receive information about each pet. You can also buy products in our store. Join our community! </h2>
<Link to='/about'>
<button >MORE ABOUT US</button>
</Link>
</div>
  
    {/*CARDS DE ANIMALES EN ADOPCION */}
   
      <h1> PETS IN ADOPTION</h1>
      <div>
       {/* <Card itemsToShow={itemsToShow} /> */}
       <PreviewPetsAdoption
       previewPets={state.petsRandomHome && state.petsRandomHome}
       />
        <Link to ="/AvaliblePetsAdoption">
        <button>MORE</button> 
      </Link> 
    
    </div>
  

    {/* FOOTER */}
      <Footer class="mt-8"/>

    </div>
  );
};

export default Home;

