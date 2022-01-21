import React from 'react';
import '../App.css';
import image from '../images/home.jpg';

const Home = () => (
  <div className="home">
    <img src={image} alt="frontal" />
    <p className="mt-0 lg:mb-4 text-center text-3xl font-bold quicksand">Motor Show</p>
  </div>
);

export default Home;
