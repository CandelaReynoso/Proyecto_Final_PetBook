import React from "react";
import { Link } from "react-router-dom";
import styles from './Landing.module.css'

export default function Landing() {
  return (
    <div>
      <div className={styles.background}>
        {/* <h2>Welcome to</h2> */}
        {/* <h1>PETBOOK</h1> */}

        <img src="/Frame1.png" alt="" />

        <div className={styles.buttons}>
          <Link to="/login">
            <button className={styles.bigButton}>LOG IN</button>
          </Link>

          <Link to="/home">
            <button className={styles.smallButton}>LATER...</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
