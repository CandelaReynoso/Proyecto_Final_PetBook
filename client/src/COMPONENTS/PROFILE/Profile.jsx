
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
    <div>
  
      <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-screen h-screen">
        <div>
          <div className="card-actions justify-start ">
            <a href="/home" className="btn btn-primary m-8">BACK HOME</a>
          </div>
          <div className="justify-center flex">
            <h1 className="titleCenter text-sky-950">My Profile</h1>
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 w-screen h-fit'>
            
                <div className=' mx-auto max-w-lg p-4 bg rounded-lg mt-2'>
                  <h2 className="titleRight text-center text-3xl lg:text-2xl mb-4">Donations:</h2>
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
              
              <div className="flex flex-col p-2 h-fit">
                <ChangePassword />
                </div>
            </div>
        </div>
      </div>

      {/* <div> <Footer /></div> */}
    </div>


  );
};

export default Profile;




{/* CANDE 
const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUpdateProfile = () => {
    // Verificar que ambos campos no estén vacíos
    if (!username || !password) {
      alert("Username and password are required");
      return;
    }
  
    // Obtener los datos actuales del usuario del local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Encontrar el usuario actual y actualizar sus datos
    const currentUser = users.find((user) => user.username === localStorage.getItem("username"));
    if (currentUser) {
      currentUser.username = username;
      currentUser.password = password;
    }
  
    // Actualizar los datos del usuario en el local storage
    localStorage.setItem("users", JSON.stringify(users));
  
    // Actualizar el nombre de usuario en el local storage
    localStorage.setItem("username", username);
  
    // Mostrar un mensaje de éxito
    alert("Profile updated successfully");
  };


  //HTML

  <div className="w-1/2 ml-15">
    <div className="textarea"> 
    <div className="text-center">
        <h2 >Modify Account Settings:</h2>
    </div>
    <br></br>
      <label className="ml-4">
        New Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
    </div> 
    <div className="textarea">
      <label className="ml-4">
        New Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
    </div>
    <div className="textarea">
      <label className="ml-4">
        Repeat Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
    </div>
    <div className="buttonSmallgreen  text-center" >
      <button className="text-center" onClick={handleUpdateProfile}>SAVE</button>
    </div>
  </div>
*/}
