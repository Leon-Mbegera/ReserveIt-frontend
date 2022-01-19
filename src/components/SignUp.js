import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
  // <form autoComplete="off" onSubmit={handleCredentials}>
  //   <label htmlFor="name">Username</label>
  //   <input type="text" id="name" onChange={(e) => handleUsername(e)} />
  //   <label htmlFor="email">Email</label>
  //   <input type="email" id="email" onChange={(e) => handleEmail(e)} />
  //   <label htmlFor="password">Password</label>
  //   <input type="password" id="password" onChange={(e) => handlePassword(e)} />
  //   <label htmlFor="password-confirm">Confirm password</label>
  //   <input type="password" id="user-password" onChange={(e) => handleConfirm(e)} />
  //   <button type="submit">Sign up</button>
  // </form>

    <div className="w-72">
      <form onSubmit={(e) => handleCredentials(e)}>
        <div className="flex flex-col">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-1 text-left"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your username"
              onChange={(e) => handleUsername(e)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded p-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border border-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="user-email"
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-1 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="user-email"
              onChange={(e) => handleEmail(e)}
              placeholder="Enter your email address"
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded p-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border border-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="user-password"
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-1 text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="user-password"
              onChange={(e) => handlePassword(e)}
              placeholder="Enter your password"
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded p-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border border-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="password-confirm"
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-1 text-left"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="user-password"
              placeholder="confirm your password"
              onChange={(e) => handleConfirm(e)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded p-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border border-red-500"
            />
          </div>
          <p className="text-center mb-5 text-yellow-500">
            <Link to="/signin">
              Already have an account?
            </Link>
          </p>
          <button
            type="submit"
            className="bg-green hover:bg-blue-700 text-white font-bold rounded p-2 w-full self-center"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
