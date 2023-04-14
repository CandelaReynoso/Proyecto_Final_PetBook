import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <footer className=" py-12 ">
        <div className="container mx-auto px-2 text-gray-300">
          <div className="flex justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <ul className=" space-y-3 p-2">
                <li>
                  <a href="#">
                    <FacebookIcon className="icons" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramIcon className="icons" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <PhoneIcon className="icons" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Explore</h2>
              <ul className="ml-6">
                <li>
                  <a href="#" className="letter-footer">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="letter-footer">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="letter-footer">
                    Adopt
                  </a>
                </li>
                <li>
                  <a href="#" className="letter-footer">
                    Store
                  </a>
                </li>
                <li>
                  <a href="#" className="letter-footer">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="#" className="letter-footer">
                    Donations
                  </a>
                </li>
              </ul>
            </div>
            <div className="pr-9 ">
              <img src="../../../public/patita3.png" alt="patita de perro" />
              <h2 className="text-base font-semibold mb-4">
                © Copy rigth 2023 by PetBook
              </h2>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
