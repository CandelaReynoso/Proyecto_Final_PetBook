import React from "react";
import styles from './PreviewPets.module.css';

const PreviewPetsAdoption = ({ previewPets }) => {
  console.log(previewPets);
  return (
    <div className={styles.container} >
      {previewPets?.map((pet, index) => {
        return (
          <div className={styles.cardWrapper} key={index}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={pet.image} alt={pet.name} />
            </div>
            <div className={styles.infoContainer}>
              <h2 className={styles.name}>Name: {pet.name}</h2>
              <h3 className={styles.petInfo}>Specie: {pet.specie}</h3>
              <h3 className={styles.petInfo}>Gender: {pet.gender}</h3>
              <h3 className={styles.petInfo}>Size: {pet.size}</h3>
            </div>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default PreviewPetsAdoption;

