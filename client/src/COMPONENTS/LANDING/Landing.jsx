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



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Login from "../LOGIN/Login";
// import styles from "./Landing.module.css";

// export default function Landing() {
//   const [showLogin, setShowLogin] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowLogin(true);
//     }, 3000);
//   }, []);

//   return (
//     <div>
//       <div className={`${styles.background} flex`}>
//         {/* <h2>Welcome to</h2> */}
//         {/* <h1>PETBOOK</h1> */}

//         <img src="/Frame1.png" alt="" />

//         <div className={`${styles.buttons} ml-auto`}>
//           <Link to="/home">
//             <button className={styles.smallButton}>LATER...</button>
//           </Link>
//           {showLogin && <Login />}
//         </div>
//       </div>
//       {showLogin && (
//         <div className={`${styles.overlay} absolute inset-0 flex justify-center items-center`}>
//           <Login />
//         </div>
//       )}
//     </div>
//   );
// }

