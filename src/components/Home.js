import React from 'react';
import '../App.css';
import image from '../images/home.jpg';

const Home = () => (
  <div className="home">
    <img src={image} alt="frontal" />
    <p className="-mt-4 text-center text-4xl font-bold quicksand">Motor Show</p>
  </div>
);

export default Home;
