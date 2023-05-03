import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/resetpassword', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Something went wrong');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Please enter your email.</h1>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
      <p>if your email is found, a new password will be sent to you.</p>
    </div>
  );
};

export default ResetPassword;
