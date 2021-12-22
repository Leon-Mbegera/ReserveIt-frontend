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

// const endpoint = 'http://localhost:3000/cars/1';
// axios.get(endpoint).then((response) => {
//   console.log(response);
// });

// const FetchCarReservations = async () => {
//   const Endpoint = 'http://localhost:3000/reservations/7';
//   const response = await fetch(Endpoint, {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const reservations = await response.json();
//   console.log('success', reservations);
// };

// export default FetchCarReservations;
fetch('http://localhost:3000/reservations/7')
  .then((response) => response.json())
  .then((data) => {
    const reservations = data;
    console.log('success', reservations);
  });
