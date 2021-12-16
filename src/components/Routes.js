import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import SignIn from './SignIn';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
