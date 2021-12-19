import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCars from '../containers/allCars';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route path="/" element={<AllCars />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
