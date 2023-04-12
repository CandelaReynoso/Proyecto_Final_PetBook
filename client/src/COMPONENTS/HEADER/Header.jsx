import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className=" contain mx-auto bg-green-200 shadow">
      <nav className="flex items-center justify-between lg:justify-start">
        <div className="logo w-1/4 p-2">
          <img src="../../public/logo.png" height="100" alt="" />
        </div>
        <div className="links w-1/4 md:w-4/6 hidden lg:block">
          <ul className="menu flex items-end justify-end gap-5">
            <il>
              <a href="#" className="link">
                Home
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Play
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Explore
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Browser
              </a>
            </il>
            <il>
              <a href="#" className="link">
                About
              </a>
            </il>
          </ul>
        </div>
        <div className="block w-1/6 lg:hidden lg:w-4/6">
          <a href="#" className="link" id="mobile-menu">
            Menu
          </a>
          <ul className="mobile-links absolute left-0 z-50 hidden w-full bg-gray-400 text-center">
            <il>
              <a href="#" className="link">
                Home
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Play
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Explore
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Browser
              </a>
            </il>
            <il>
              <a href="#" className="link">
                About
              </a>
            </il>
          </ul>
        </div>
      </nav>
    </div>
  );
}

// const menuBotton = document.querySelector("mobile-menu");

// menuBotton.addEventListener("click", e => {
//   const menu = document.querySelector(".mobile-links");
// });

// menu.classList.toggle("hidden");
