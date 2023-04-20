import React from "react";
import { Link } from "react-router-dom";
import Login from "../LOGIN/Login";
import { useState } from "react";

export default function Landing() {
 
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);   
  };

  const handleCloseClick = () => {
    setShowLogin(false);
  };

  return (
    <div>

      <div className="hero">
        <div className="hero min-h-screen opacity-50" style={{ backgroundImage: `url('PFHENRY.gif')` }}></div>
        
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-black">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-semibold">Welcome to</h1>
            <p className="mb-5 italic"> <img src="/logo.png" alt="" /> Log in to take home your new family member. </p>
         
            <button className="btn btn-primary" onClick={handleLoginClick}>LOG  IN</button>

            <div className="mt-4">
              <Link to="/home">
                <button className="btn btn-ghost">ENTER WITHOUT LOGIN</button>
              </Link>
            </div>     
          </div>
        </div>
      </div>

      {showLogin && (
        <div className="opacity-[99%] flex justify-center items-center h-screen ">
          <div className="mt-[-75rem]">
          <button onClick={handleCloseClick}>X</button>
            <Login />
          </div>
        </div>
      )}

    </div>
  );
}
