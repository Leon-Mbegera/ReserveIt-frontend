import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCars from '../containers/allCars';
import SingleCar from '../containers/SingleCar';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyReservations from './MyReservations';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route path="/" element={<AllCars />} />
      <Route exact path="/cars/:id" element={<SingleCar />} />
      <Route exact path="/MyReservations" element={<MyReservations />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
