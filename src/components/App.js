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
import Layout from './Layout';

const Router = () => (
  <BrowserRouter>
    <div className="flex flex-row">
      <div>
        <Sidebar navigationLinks={navigationLinks} />
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Layout />}>

            {/* public routes */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/models" element={<AllCars />} />

            {/* protected routes */}
            <Route exact path="/cars/:id" element={<SingleCar />} />
            <Route exact path="/MyReservations" element={<MyReservations />} />
          </Route>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default Router;
