import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetDetailSuccess } from '../../Redux/actions';
import {Link} from 'react-router-dom';
import styles from '../DETAIL/Detail.module.css';

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
    <div className={styles.background}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3 className={styles.title}>{pet.name}</h3>
          <div >
            <img className={styles.img} src={pet.image} alt={pet.name} />
          </div>
          <img className = {styles.imgFoot}  src="../../../public/patita3.png" alt="patita de perro" />
          <ul className={styles.list}> 
          <div className={styles.list2}>
          <li>Specie: {pet.specie}</li>
          <li>Gender: {pet.gender}</li>
          <li>Size: {pet.size}</li>
          <li>Weight: {pet.weight}</li>
          <li>Age: {pet.age}</li>
          <li>Adopted: {pet.adopted ? 'Yes' : 'No'}</li>
          </div>
         
        </ul>
        </div>
      )}
      <br>
      </br>
        <Link to = "/AvaliblePetsAdoption">
         <button className={styles.buttonAdoptMe}>ADOPT ME!</button>  
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