import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
  const Menu = e => {
    const menu = document.querySelector(".mobile-links");
    menu.classList.toggle("hidden");
  };

  return (
    <div className=" contain mx-auto bg-green-200 shadow">
      <nav className="flex items-center justify-between lg:justify-start">
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
      </nav>
    </div>
  );
}
