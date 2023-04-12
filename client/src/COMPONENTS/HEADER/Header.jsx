import React from "react";

export default function Header() {
  return (
    <div className="mx-auto bg-yellow-300 shadow-lg">
      <nav className="flex items-center justify-between lg:justify-start">
        <div className="logo w-1/6 p-2">
          <img
            src="https://logodownload.org/wp-content/uploads/2015/02/burger-king-logo-6.png"
            width="100"
            alt=""
          />
        </div>
        <div className="links w1/6 md:w4/6 hidden lg:block">
          <ul className="menu flex items-center justify-center gap-5">
            <il>
              <a href="#" className="link">
                Home
              </a>
            </il>
            <il>
              <a href="#" className="link">
                Play{" "}
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
              <a
                href="#"
                className="rounded-2xl border-4 border-red-500 p-2 font-bold transition duration-500 hover:bg-white hover:text-blue-500">
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
                Play{" "}
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
              <a
                href="#"
                className="my-4 inline-block rounded-2xl border-4 border-red-500 p-2 font-bold transition duration-500 hover:bg-white hover:text-blue-500">
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
