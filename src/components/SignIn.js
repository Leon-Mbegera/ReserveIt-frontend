import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserSignIn } from '../containers/APIs';
// import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmail = (e) => (
    setEmail(e.target.value)
  );

  const handlePassword = (e) => (
    setPassword(e.target.value)
  );

  const Authorization = (data) => {
    if (data.token) {
      localStorage.setItem('accessToken', data.token);
      navigate('/');
    }
  };

  const handleCredentials = (e) => {
    e.preventDefault();
    UserSignIn(email, password)
      .then((data) => {
        Authorization(data);
      });
  };

  return (
    <form onSubmit={(e) => handleCredentials(e)}>
      <label htmlFor="user-email">Email</label>
      <input type="email" id="user-email" onChange={(e) => handleEmail(e)} />
      <label htmlFor="user-password">Password</label>
      <input type="password" id="user-password" onChange={(e) => handlePassword(e)} />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default SignIn;
