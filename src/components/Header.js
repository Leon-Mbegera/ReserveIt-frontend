import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <div>
        <Link to="/signup">sign up</Link>
        <Link to="/signin">sign in</Link>
        <Link to="/"> Home</Link>
        <Link to="/MyReservations">Reservations</Link>
      </div>
    </nav>
  </header>
);

export default Header;
