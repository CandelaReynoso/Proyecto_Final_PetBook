import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";
export default function Header() {
  const Menu = e => {
    const menu = document.querySelector(".mobile-links");
    menu.classList.toggle("hidden");
  };



  return (
    <div className=" contain mx-auto bg-green-200 shadow">
  
      <div className="navbar bg-primary">
        <div className="flex-1">
          <Link to='/home'>
            <img src="/patanegra.png" alt="" width='200rem'/>
           </Link>
        </div>

        <div className="flex-none gap-2">
          {/* <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div> */}
          <a href="/home" className="textoheader">HOME</a>
          <a href="/about" className="textoheader">ABOUT</a>
          <a href="/donate" className="textoheader">DONATE</a>
          <a href="/store" className="textoheader">STORE</a>
          <a href="/AvaliblePetsAdoption" className="textoheader">ADOPT</a>


          {/* <a className="textoheader">LOGIN</a> 
          ESTO LO AGREGO CUANDO ARREGLE QUE SE MUESTRE SOLO SI ESTÁ LOGUEADO SINO NO. */}

          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/perritoabout.png"/>
              </div>
            </label>
          
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li><a>Settings <span className="badge">New</span> </a></li>
            <li><a>Logout</a></li>
          </ul>
          </div>
        </div>
      </div>

    </div>
  );
}











      {/* <nav className="flex items-center justify-between lg:justify-start">
        <div className="logo w-1/4 p-2">
          <a href="/home">
            <img
              src="../../public/patanegra.png"
              height="100"
              alt="Logo de petBook"
            />
          </a>
        </div>
        <div className="links w-1/4 md:w-4/6 hidden lg:block">
          <ul className="menu flex items-end justify-end gap-5">
            <il>
              <a href="/home" className="link">
                Home
              </a>
            </il>
            <il>
              <a href="#" className="link">
                About
              </a>
            </il>
            <il>
              <a href="/AvaliblePetsAdoption" className="link">
                Adopt
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Store
              </a>
            </il>
            <il>
              <a href="/register" className="link">
                Sign In
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Donations
              </a>
            </il>
          </ul>
        </div>
        <div className="block w-1/6 lg:hidden lg:w-4/6">
          <MenuIcon
            className=" hover:border-green-300 rounded cursor-pointer hover:bg-green-300/40 active:bg-green-300 transition duration-300 "
            id="mobile-menu"
            onClick={e => {
              Menu(e);
            }}>
            Menu
          </MenuIcon>
          <ul className="mobile-links absolute left-0 z-50 hidden w-full bg-green-200 text-center ">
            <il>
              <a href="#" className="link">
                Home
              </a>
            </il>
            <il>
              <a href="#" className="link">
                About
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Adopt
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Store
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Sign In
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Donations
              </a>
            </il>
          </ul>
        </div>
      </nav> */}