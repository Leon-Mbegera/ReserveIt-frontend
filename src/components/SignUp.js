import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserSignUp } from '../containers/APIs';
import { saveCurrentUser } from '../actions/index';

const SignUp = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const Authorization = (data) => {
    if (data.token) {
      localStorage.setItem('accessToken', data.token);
      dispatch(saveCurrentUser(data.username));
      navigate('/models');
    }
  };

  const handleCredentials = (e) => {
    e.preventDefault();
    UserSignUp(username, email, password, confirm)
      .then((data) => {
        Authorization(data);
      });
  };

  return (
    <form autoComplete="off" onSubmit={handleCredentials}>
      <label htmlFor="name">Username</label>
      <input type="text" id="name" onChange={(e) => handleUsername(e)} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={(e) => handleEmail(e)} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={(e) => handlePassword(e)} />
      <label htmlFor="password-confirm">Confirm password</label>
      <input type="password" id="user-password" onChange={(e) => handleConfirm(e)} />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
