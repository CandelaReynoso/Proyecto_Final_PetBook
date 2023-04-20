import React, { useState } from 'react';
import { registerUser } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
  const [formState, setFormState] = useState({
    nickname: '',
    email: '',
    password: '',
    role: 'user_role',
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // const handleRepeatPasswordChange = (e) => {
  //   setFormState({
  //     ...formState,
  //     repeatPassword: e.target.value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formState.password !== formState.repeatPassword) {
  //     alert('Passwords do not match');
  //   } else {
  //     dispatch(registerUser(formState)); //
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formState.password === 'repeatPassword') {    
      console.log('Las contraseñas coinciden');      
    } else {     
      console.log('Las contraseñas no coinciden');
    }


    dispatch(registerUser(formState))
    navigate('/home')
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
{/* IMAGEN */}
      <div className='hidden sm:block'>  
        <img className='w-full h-full object-cover' src="/RegisterImg.png" alt="" />
      </div>
      

  <div 
  className='bg-gray-100 flex flex-col justify-center'>  
    <form onSubmit={handleSubmit}
    className='max-w-[400px] w-full mx-auto rounded-lg bg-white  p-4'>
    <h2 
        className='subtitle'>
          REGISTER.
    </h2>

    <div className='divForminput'>
      <label>
        {/* Nickname: */}
        <input 
        type="text" 
        name="nickname" 
        value={formState.nickname} 
        onChange={handleChange} 
        required
        placeholder='Nickname'
        className='inputs'
        
        />
      </label>

    </div>

    <div className='divForminput'>
      <label>
        {/* Email: */}
        <input 
        type="email" 
        name="email" 
        value={formState.email} 
        onChange={handleChange} 
        required
        placeholder='Email'
        className='inputs'
        />
      </label>
    </div>

    <div className='divForminput'>
      <label>
        {/* Password: */}
        <input 
        type="password" 
        name="password" 
        value={formState.password} 
        onChange={handleChange} 
        required 
        placeholder='Password'
        className='inputs' />        
      </label>
    </div>


    <div className='divForminput'>
      <label>
        {/* Repeat Password: */}
        <input 
        type="password" 
        name="repeatPassword" 
        placeholder='Repeat Password'
        onChange={handleChange} 
        required 
        className='inputs' />
      </label>
    </div>

    <div className='divForminput'>
      {/* <label>
        Role:
        <input 
        type="text" 
        name="role" 
        value={formState.role} 
        onChange={handleChange} 
        required 
        className='inputs'
        /> 
        {/* <select name="" id="">user_role</select>
        <select name="" id="">admin_role</select> */}
      {/* </label>  */}

      {/* <select         onChange={handleChange} 
        required 
        className='w-full rounded-lg border p-2'>
        <option value="user_role">user</option>
        <option value='admin_role'>admin</option>
      </select> */}
      </div>
   
      <button 
      type="submit"
      className='buttonSubtmit'
      >
       Register
      </button>
    </form>
  </div>      
</div>

  )};

export default Registration;