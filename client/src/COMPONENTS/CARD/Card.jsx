import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../../Redux/actions';
import styles from '../CARD/Card.module.css';

const Card = (pet) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const pets = useSelector((state) => state.pets);
  // console.log(pets);
  // console.log(pets);

// la data viene en un atributo rows viene asi por la paginacion hecha con sequelize tip siempre hacer console.log de lo que te traiga la action 
  // useEffect(() => {
  //   dispatch(getPets()).then(() => {
  //     setLoading(false);
  //   });
  // }, [dispatch]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
          <h1 className={styles.title}>Find & Adopt</h1>
          <div>
              <h3 className={styles.name}>{pet.name.toUpperCase()}</h3>
          </div>
        
          <div>
          <Link key={pet.id} to={`/detail/${pet.id}`}>
            <div className={styles.imgContainer}>
               <img className={styles.img} src={pet.image} alt={pet.name} /> 
            </div>
          
            </Link>
          </div>
          <div className={styles.petInfo}>
            <p>Gender: {pet.gender}</p>
            <p>Age: {pet.age}</p>
          </div>          
    </>
  );
};

export default Card;