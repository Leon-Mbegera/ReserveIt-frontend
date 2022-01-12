import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCars from '../containers/allCars';
import SingleCar from '../containers/SingleCar';
import Sidebar from './Sidebar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyReservations from './MyReservations';
import Home from './Home';
import navigationLinks from '../data/navigation';

const Router = () => (
  <BrowserRouter>
    <div className="flex flex-row">
      <Sidebar navigationLinks={navigationLinks} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/models" element={<AllCars />} />
        <Route exact path="/cars/:id" element={<SingleCar />} />
        <Route exact path="/MyReservations" element={<MyReservations />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default Router;
