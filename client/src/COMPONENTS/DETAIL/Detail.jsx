import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetDetailSuccess } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import styles from '../DETAIL/Detail.module.css';
import Header from '../HEADER/Header';
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";


function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const pet = useSelector(state => state.pet);

  useEffect(() => {
    dispatch(fetchPetDetailSuccess(id))
      .then(() => setLoading(false));
  }, [id]);

  return (
    
    <div  className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv] h-[100hv]">
        <div>
          {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
        </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        
        <div className="card w-72 bg-base-100 shadow-xl m-4">
          <h3 className="card-title text-black font-['candara']">{pet.name}</h3>
          <div>
            <img className="card-body" src={pet.image} alt={pet.name} />
          </div>
          
          <Link to='/home'>
          <img className = {styles.imgFoot}  src="../../../public/patita3.png" alt="patita de perro" />
          </Link>
        </div>
      )}
      <br>
      </br>
      <div className="flex justify-center">
  <ul className="text bg-primary w-fit rounded-full max-w-lg mx-auto">
    <div className="text-center">
      <li>Specie: {pet.specie}</li>
      <li>Gender: {pet.gender}</li>
      <li>Size: {pet.size}</li>
      <li>Weight: {pet.weight} kg</li>
      <li>Age: {pet.age} years</li>
      <li>Adopted: {pet.adopted ? 'Yes' : 'No'}</li>
    </div>
  </ul>
</div>

        <Link to = "/FormAdoption">
        <div className="flex justify-end w-full">
          <button className="btn btn-primary sm:w-auto">ADOPT A PET!</button>
        </div>
        </Link>
        <br>
        </br>
        <div className="flex justify-end w-full">
       <Link to ="/donate">
        <button className="btn btn-primary">DONATE!</button>
       </Link>
       </div>
       <div><Footer/></div>
    </div>
    
  );
}

export default Detail;