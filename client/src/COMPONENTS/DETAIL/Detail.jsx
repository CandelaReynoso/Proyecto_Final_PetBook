import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetDetailSuccess } from '../../Redux/actions';
import {Link} from 'react-router-dom';

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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
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
            <p>Adopted: {pet.adopted ? 'Yes' : 'No'}</p>
          </div>
        </div>
      )}
      <br>
      </br>
      <Link to = "/AvaliblePetsAdoption">
        <button>Go Back</button>
        </Link>
    </div>
  );
}

export default Detail;