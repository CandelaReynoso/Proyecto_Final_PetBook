import React from "react";
import { Link,  } from 'react-router-dom'


export default function HeaderLogin() {
  const Menu = e => {
    const menu = document.querySelector(".mobile-links");
    menu.classList.toggle("hidden");
  };
  console.log('userlogueado ' + localStorage.getItem('token'));


  const userLogout = () => {
    localStorage.clear();
    window.location.reload();
    console.log(localStorage.getItem('token'));
  }
  
  return (
    <div className=" contain mx-auto bg-transparent">
  
      <div className="navbar bg-transparent">
        <div className="flex-1">
          <Link to='/home'>
            <img src="/logo.png" alt="" width='200rem'/>
           </Link>
        </div>

        <div className="flex-none gap-2">

          <a href="/home" className="textoheader">home</a>
          <a href="/about" className="textoheader">about</a>
          <a href="/donate" className="textoheader">donate</a>
          <a href="/store" className="textoheader">store</a>
          <a href="/AvaliblePetsAdoption" className="textoheader">adopt</a>
          <a href="/FormContact" className="textoheader"> contact us</a>


        {/*                USUARIO LOGUEADO               */}

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/perritoabout.png"/>  
                {/* ACA REEMPLAZAR POR LA IMAGEN DE PERFIL DE USUARIO, O AVATAR */}
              </div>
            </label>
          
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
              Profile
              </a>
            </li>
            {/* <li><a>Settings <span className="badge">New</span> </a></li> */}
            <li><button onClick={() => userLogout()}>Logout</button></li>
          </ul>
          </div>
        </div>
      </div>

    </div>
  );
}