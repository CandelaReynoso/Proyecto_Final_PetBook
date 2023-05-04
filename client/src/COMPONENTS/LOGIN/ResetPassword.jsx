import React, { useState } from 'react';
import axios from 'axios';
import Header from '../HEADER/Header';
import HeaderLogin from '../HEADER/HeaderLogin';
import Footer from '../FOOTER/Footer';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/resetpassword', { email });
      setMessage(response.data.message);
      alert("If your email is found, a new password will be sent to you.") 
    } catch (error) {
      setMessage('Something went wrong');
    }
  };

  return (
    <div className='flex flex-col w-full justify-center items-center'>
    <div className="bg-[url('/backabout.png')] bg-no-repeat w-screen h-screen">
      {/* HEADER */}
  <div>
      {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
  </div>
      

      <div className='flex items-center justify-center'> 


      
      <div className='card w-auto bg-base-100 shadow-xl'>
        <div className='card-body bg-white rounded-full'>

        
      <form onSubmit={handleSubmit}>
        <h1 className='subtitle'>FORGOT YOUR PASSWORD?</h1>
        <p className='text italic'>A new password will be send to your registered email</p>
        <br />
        <br />

        <h1 className='text-center text text-xl'>Please enter your email:</h1>
        <label>
          {/* Email: */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}            
            className='inputs'
          />
        </label>
        <div className='card-actions justify-center mt-4'> 
          <button
            type="submit"
            className='btn btn-block btn-primary'
            >Reset Password
          </button>

        </div>

      </form>
      {message && <p className='text-error'>{message}</p>}



      

    </div>
    </div>
    </div>
    </div>
        <div className=' w-full'>
        < Footer /> 
        </div>
    </div>
  );
};

export default ResetPassword;
