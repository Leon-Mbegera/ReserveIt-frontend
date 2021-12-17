import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => (
    setEmail(e.target.value)
  );

  const handlePassword = (e) => (
    setPassword(e.target.value)
  );

  const handleCredentials = () => {
    axios.post('http://www.localhost:3000/auth/signin', {
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleCredentials}>
      <label htmlFor="user-email">Email</label>
      <input type="email" id="user-email" value="" onChange={(e) => handleEmail(e)} />
      <label htmlFor="user-password">Password</label>
      <input type="password" id="user-password" value="" onChange={(e) => handlePassword(e)} />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default SignIn;
