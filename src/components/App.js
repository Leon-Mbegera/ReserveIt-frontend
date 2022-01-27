import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCars from '../containers/allCars';
import SingleCar from '../containers/SingleCar';
import Sidebar from './Sidebar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyReservations from './MyReservations';
import Home from './Home';
import navigation from '../data/navigation';
import Layout from './Layout';
import RequireAuth from './RequireAuth';
import SignOut from './SignOut';

const App = () => {
  const navigationLinks = navigation();

  return (
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
              <Route exact path="/signout" element={<SignOut />} />

              {/* protected routes */}
              <Route element={<RequireAuth />}>
                <Route exact path="/cars/:id" element={<SingleCar />} />
                <Route exact path="/MyReservations" element={<MyReservations />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
