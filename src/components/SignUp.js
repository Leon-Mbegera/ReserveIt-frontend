import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirm] = useState('');

  const handleUsername = (e) => (
    setName(e.target.value)
  );

  const handleEmail = (e) => (
    setEmail(e.target.value)
  );

  const handlePassword = (e) => (
    setPassword(e.target.value)
  );

  const handleConfirm = (e) => (
    setConfirm(e.target.value)
  );

  const handleCredentials = () => {
    axios.post('http://www.localhost:3000/auth/signup', {
      username,
      email,
      password,
      passwordConfirm,
    });
  };

  return (
    <form onSubmit={handleCredentials}>
      <label htmlFor="name">Username</label>
      <input type="text" id="name" value="" onChange={(e) => handleUsername(e)} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value="" onChange={(e) => handleEmail(e)} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value="" onChange={(e) => handlePassword(e)} />
      <label htmlFor="password-confirm">Confirm password</label>
      <input type="password" id="user-password" value="" onChange={(e) => handleConfirm(e)} />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
