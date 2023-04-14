import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../../Redux/actions';

const Card = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const pets = useSelector((state) => state.pets);

  useEffect(() => {
    dispatch(getPets()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {pets?.map((pet) => (
        <Link key={pet.id} to={`/detail/${pet.id}`}>
          <h3>{pet.name}</h3>
          <div>
            <img src={pet.image} alt={pet.name} />
          </div>
          <div>
            <p>Specie: {pet.specie}</p>
            <p>Gender: {pet.gender}</p>
            <p>Size: {pet.size}</p>
            <p>Weight: {pet.weight}</p>
            <p>Age: {pet.age}</p>
            <p>Adopted: {pet.adopted}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;