import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import axios from 'axios';
import store from './store';
// import { useSelector } from 'react-redux';
import Router from './components/Routes';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  rootElement,
);

// const GetMyReservations = async () => {
//   const response = await fetch('http://localhost:3000/reservations', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const myreservations = await response.json();
//   console.log('index.js', myreservations);
//   return myreservations;
// };

const UserSignIn = async () => {
  const response = await fetch('http://localhost:3000/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      auth: {
        email: 'samrood@exmail.com',
        password: '123456',
      },
    }),
  });

  const data = await response.json();
  console.log(data);
  return data;
};

UserSignIn();

export default UserSignIn;
