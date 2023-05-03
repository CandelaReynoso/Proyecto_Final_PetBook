import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setErrorMessage('New password and confirm new password do not match');
      return;
    }

    try {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        const response = await fetch(`http://localhost:3001/users/changepassword/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
        "x-token": token },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Error changing password');
      }

      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='mx-auto max-w-lg p-4 bg-white rounded-lg border-black border-2'>
    
        <h2 className="titleLeft text-center text-3xl lg:text-2xl mb-4">Modify Account Settings:</h2>
    
    <form onSubmit={handleSubmit}>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div>
        <label className="text" htmlFor="oldPassword">Old Password:</label>
        <input className='inputs'
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={(event) => setOldPassword(event.target.value)}
          required
        />
      </div>
      <div>
        <label className="text" htmlFor="newPassword">New Password:</label>
        <input className='inputs'
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          required
        />
      </div>
      <div>
        <label className="text" htmlFor="confirmNewPassword">Confirm New Password:</label>
        <input className='inputs'
          type="password"
          id="confirmNewPassword"
          value={confirmNewPassword}
          onChange={(event) => setConfirmNewPassword(event.target.value)}
          required
        />
      </div>
      <button className='buttonSubtmit text-center '
      type="submit">Change Password</button>
    </form>
    </div>
   
  );
};

export default ChangePassword;
