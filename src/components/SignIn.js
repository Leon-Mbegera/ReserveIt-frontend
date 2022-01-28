import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { UserSignIn } from '../containers/APIs';
import { saveCurrentUser } from '../actions/index';
import useAuth from '../hooks/useAuth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setAuthorized = useAuth()[1];
  const alert = useAlert();

  const handleEmail = (e) => (
    setEmail(e.target.value)
  );

  const handlePassword = (e) => (
    setPassword(e.target.value)
  );

  const Authorization = (data) => {
    if (email && password) {
      if (data.token) {
        localStorage.setItem('accessToken', data.token);
        setAuthorized(data.token);
        dispatch(saveCurrentUser(data.username));
        navigate('/models');
        alert.success("You're successfully Logged in!");
      } else if (data.error) {
        alert.error(data.error);
      }
    } else {
      alert.error('Please fill in all the fields!');
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
    <>
      <h1 className="text-2xl font-semibold quicksand text-center mt-12 mb-2">Welcome back, Please Sign in to continue</h1>
      <form
        onSubmit={(e) => handleCredentials(e)}
        className="signin"
      >
        <div className="flex flex-col">
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
          <p className="text-center mb-5 text-yellow-500">
            <Link to="/signup">
              Don&apos;t have an account?
            </Link>
          </p>
          <button
            type="submit"
            className="bg-green hover:bg-blue-700 text-white font-bold rounded p-2 w-full self-center"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
