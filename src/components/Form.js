import { useState } from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

const ReservationForm = ({ car }) => {
  const [agreement, setAgreement] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const handleAgreement = (e) => setAgreement(e.target.value);

  const handleCity = (e) => setCity(e.target.value);

  const handleDate = (e) => setDate(e.target.value);

  const postData = {
    car_id: car.id,
    agreement,
    city,
    date,
  };

  fetch('http://localhost:3000/reservations', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log("Success:", data)
  // }).then((error) => {
  //   console.log("Error:", error)
  // })

  return (
    <div>
      <form>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="model" value={car.model} />
        <textarea name="agreement" onChange={(e) => handleAgreement(e)} />
        <input type="text" onChange={(e) => handleCity(e)} />
        <input type="date" onChange={(e) => handleDate(e)} />
        <button type="button">Reserve</button>
      </form>
    </div>
  );
};

ReservationForm.propTypes = {
  car: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ReservationForm;
