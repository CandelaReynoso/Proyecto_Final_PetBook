
import React, { useState, useEffect } from "react";
import Footer from "../FOOTER/Footer";
import HeaderLogin from "../HEADER/Header";
import Header from "../HEADER/Header";
import axios from "axios";
import ChangePassword from '../LOGIN/ChangePassword';



const Profile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [donations, setDonations] = useState([]);


  const userId = localStorage.getItem('id');

  useEffect(() => { 
    axios
      .get(`/donations?id=${userId}`)
      .then((response) => {
        setDonations(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Calcular el monto total de las donaciones del usuario
  const totalDonations = donations.reduce(
    (accumulator, donation) => accumulator + donation.amount,
    0
  );
  

  return (
    <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-screen">
   
      <div >
        {localStorage.getItem("token") ? (
          <HeaderLogin className="mb-4" />
        ) : (
          <Header className="mb-4" />
        )}
     </div>
      <h1 className="titleCenter">My Profile</h1>
      <div className="flex justify-center h-screen w-screen">
        <div className="flex flex-row w-full lg:w-3/4 mx-4">

        <div className='mx-auto max-w-200 p-4 bg-white rounded-lg border-black border-2'>
            <h2 className="titleRight text-center text-3xl lg:text-2xl mb-4">Your Donations:</h2>
            <ul className="text ">
              {donations.map((donation) => (
                <li key={donation.id}>
                  Amount: ${donation.amount}, Date: {new Date(donation.createdAt).toLocaleDateString()}
                </li>
              ))}
            </ul>
            <h2 className="textColorPink text-2xl mt-10">
              Total Donations: ${totalDonations}
            </h2>
          </div>
          <div className="w-1/2 lg:w-2/5 px-2">
            <ChangePassword />
          </div>
        </div>
      </div>


      
      <div  className="fixed bottom-0 left-0 w-full" >
        <Footer className="mt-8" />
      </div>
      </div>

  );
};

export default Profile;




