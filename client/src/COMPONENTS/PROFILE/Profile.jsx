import React, { useState } from "react";
import Footer from "../FOOTER/Footer";
import HeaderLogin from "../HEADER/Header";
import Header from "../HEADER/Header";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div className="h-full" >
      <div >
        {localStorage.getItem("token") ? (
          <HeaderLogin className="mb-4" />
        ) : (
          <Header className="mb-4" />
        )}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 h-full w-full'>
          <div  className='flex flex-col justify-center'> 
      <div className="subtitle">
        <h1> MY PROFILE</h1>
      </div>
      <br />
      <div className="divForminput">
        <div className="flex h-full">
  <div className="w-1/2">
    <h2 className="text-center-right ml-10">Donations:</h2>
    {/* Aquí renderizar la información de las donaciones */}
  </div>
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
</div>
</div>
</div>
</div>
      <br></br>
      <div  className="fixed bottom-0 left-0 w-full" >
        <Footer className="mt-8" />
      </div>
    </div>
  );
};

export default Profile;
