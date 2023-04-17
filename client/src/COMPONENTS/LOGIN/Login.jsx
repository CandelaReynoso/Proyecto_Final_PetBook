import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



//la idea es que esta sea la pagina de inicio, 
//al abrir: se ve el logo en pantalla completa, pero a los 3 segundos se despliega el formulario login --> HACER ESTE CAMBIOOOOOOO :) 

const Login = () => {
  function handleCredentialResponse(response){
    console.log('id_token',  response.credential) // google token
    const body = {id_token: response.credential}
    fetch('http://localhost:3001/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then( resp => resp.json())
    .then( data => {
      console.log(data)
      localStorage.setItem('email', data.user.email)
    })
    .catch(error => console.error(error))
  }

  
  function handleSignOutButton(e){
    console.log(google.accounts.id);
    google.accounts.id.disableAutoSelect();
    google.accounts.id.revoke(localStorage.getItem('email'), done =>{
      localStorage.clear();
      location.reload();
    })
  }

  useEffect(()=>{
    google.accounts.id.initialize({
      client_id: "29807012109-in3jnv9asdchp613plc7ng3mp0oqpq8o.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  },[])

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setFormState({
      ...formState,
      email: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    setFormState({
      ...formState,
      password: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:3001/auth/login/`, {  //  con esta ruta! 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      navigate.push('/');
    } else {
      alert(data.msg);
    }
  };

  return (
    <div 
    className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

{/* IMAGEN */}
			<div className='hidden sm:block'>  
      	<img className='w-full h-full object-cover' src="/LoginImg.png" alt="" /> 
        {/* arreglar el problemita de la imagen q se ve horrible y cambiar el color del botón q está en otro color! */}
      </div>
    
    <div 
    className='bg-gray-100 flex flex-col justify-center'>
    
    <form onSubmit={handleSubmit} 
    className='max-w-[360px] w-full mx-auto rounded-lg bg-white  p-4'> 

        <h2 
        className='text-4xl dark font-bold text-center'>PETBOOK</h2>
       
       <div className='flex flex-col py-2'>
        <label> email: </label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleEmailChange}
          required
          className='border p-2 rounded-lg'
        />
      </div>

      <div className='flex flex-col py-2'>
      <label>
        password:
      </label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handlePasswordChange}
          required
          className='border p-2 rounded-lg'
        />
    	</div>

      <div>
      <p className='flex items-center text-gray-400 text-s py-2'>forgot my password</p>
      {/* cambiarle la fuente */}

      </div>

      <div className='flex justify-between py-3'>
                    {/* <p className='flex items-center text-gray-400 '>
                      <input className='mr-2 ' type="checkbox" /> Remember me
                    </p> */}

                    <button className=' w-40 border shadow-lg hover:shadow-xl px-8 py-2 relative flex item-center hover:text-teal-300'> ICON.Google</button>

                    <Link to='/register'>
                    <button className='w-40 border shadow-lg hover:shadow-xl px-3 py-2 relative flex item-center text-teal-300 hover:text-gray-700 '> Create an account</button>
                    </Link>

                   
      </div>
      
      <button 
      type="submit"
      className='w-full my-3 py-2 bg-teal-300 shadow-lg shadow-teal-400/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
      >Login
      </button>
      <div id="buttonDiv"></div>
      <button id="googleSignOut" onClick={handleSignOutButton}>Sign Out</button>
      {/* <h4 className='text-center'>OR</h4> */}

      <Link to='/home'>
      <button className='text-gray-300 hover:text-gray-700 w-full'>Sign in later</button>
      </Link>


    </form>
    </div>
    </div>
  );
};

export default Login;
