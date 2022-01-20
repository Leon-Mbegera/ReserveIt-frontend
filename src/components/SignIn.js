import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { UserSignIn } from '../containers/APIs';
import { saveCurrentUser } from '../actions/index';
import useAuth from '../hooks/useAuth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setAuthorized = useAuth()[1];

  const handleEmail = (e) => (
    setEmail(e.target.value)
  );

  const handlePassword = (e) => (
    setPassword(e.target.value)
  );

  const Authorization = (data) => {
    if (data) {
      localStorage.setItem('accessToken', data.token);
      setAuthorized(data.token);
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
    <div className="w-72">
      <form
        onSubmit={(e) => handleCredentials(e)}
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
    </div>
  );
};

export default SignIn;
