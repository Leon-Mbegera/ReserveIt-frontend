import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSignIn } from '../containers/APIs';
import { saveCurrentUser } from '../actions/index';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (e) => (
    setEmail(e.target.value)
  );

  const handlePassword = (e) => (
    setPassword(e.target.value)
  );

  const Authorization = (data) => {
    if (data) {
      localStorage.setItem('accessToken', data.token);
      dispatch(saveCurrentUser(data.username));
      navigate('/models');
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
