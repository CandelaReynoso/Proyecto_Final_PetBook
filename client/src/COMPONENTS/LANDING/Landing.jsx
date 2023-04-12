import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div>
        <h2>Welcome to</h2>
        {/* <h1>PETBOOK</h1> */}

        <img src="/logo.png" alt="" />

        <div>
          <Link to="/login">
            <button>LOG IN</button>
          </Link>

          <Link to="/home">
            <button>LATER...</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
