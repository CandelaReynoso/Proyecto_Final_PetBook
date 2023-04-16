import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
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

    const response = await fetch(`http://localhost:3001/users/`, {
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
      </div>
    
    <div 
    className='bg-gray-800 flex flex-col justify-center'>
    
    <form onSubmit={handleSubmit} 
    className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'> 

        <h2 
        className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
       
       <div className='flex flex-col text-gray-400 py-2'>
        <label>
        Email:
        </label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleEmailChange}
          required
          className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
        />
      </div>

      <div className='flex flex-col text-gray-400 py-2'>
      <label>
        Password:
      </label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handlePasswordChange}
          required
          className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
        />
    	</div>

      <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
      </div>
      
      <button 
      type="submit"
      className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
      >Login
      
    </button>


    </form>
    </div>
    </div>
  );
};

export default Login;
