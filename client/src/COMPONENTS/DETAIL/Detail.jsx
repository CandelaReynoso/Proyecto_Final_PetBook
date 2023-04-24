import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetDetailSuccess } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import styles from '../DETAIL/Detail.module.css';
import AdoptionForm from '../FORMS/FormAdoption';


function Detail() {
  const [loading, setLoading] = useState(true);
  const [selectedPet, setSelectedPet] = useState(null); // create state variable
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const pet = useSelector(state => state.pet);
  const userEmail = localStorage.getItem('email');


  useEffect(() => {
    dispatch(fetchPetDetailSuccess(id))
      .then(() => setLoading(false));
  }, [id]);

  const handleSelectPet = (e) => {
    //e.preventDefault();
    setSelectedPet(pet); // update state variable with pet's data
  };

  if(pet){
    console.log(pet);
  }
  

  return (
    <div className={styles.background}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3 className={styles.title}>{pet.name}</h3>
          <div >
            <img className={styles.img} src={pet.image} alt={pet.name} />
          </div>
          
          <Link to='/home'>
          <img className = {styles.imgFoot}  src="../../../public/patita3.png" alt="patita de perro" />
          </Link>

          <ul className={styles.list}> 
          <div className={styles.list2}>
          <li>Specie: {pet.specie}</li>
          <li>Gender: {pet.gender}</li>
          <li>Size: {pet.size}</li>
          <li>Weight: {pet.weight} kg</li>
          <li>Age: {pet.age} years</li>
          <li>Adopted: {pet.adopted ? 'Yes' : 'No'}</li>
          </div>
         
        </ul>
        </div>
      )}
      <br>
      </br>
        <Link to = {`/FormAdoption/${id}`}>
         <button onClick={handleSelectPet} className={styles.buttonAdoptMe}>ADOPT ME!</button>
         {selectedPet && <AdoptionForm pet={pet} userEmail={userEmail} />} {/* pass selected pet's data as prop */} 
        </Link>
        
        <br>
        </br>
       <Link>
        <button className={styles.buttonSponsor}>SPONSOR ME!</button>
       </Link>
        
    </div>
  );
}

export default Detail;