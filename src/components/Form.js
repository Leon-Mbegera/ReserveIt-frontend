import { useState } from 'react';
import PropTypes from 'prop-types';
// import { PostReservationDetails } from '../containers/APIs';

const ReservationForm = ({ car, user }) => {
  const [agreement, setAgreement] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const handleReservationDetails = (e) => {
    e.preventDefault();
    const details = {
      reservation: {
        car_id: car.id, agreement, city, date,
      },
    };
    const accessToken = localStorage.getItem('accessToken');
    fetch('http://localhost:3000/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(details),
    });
  };

  return (
    <section>
      <div>
        <form onSubmit={handleReservationDetails}>
          <input type="text" placeholder="username" value={user} required readOnly />
          <input type="text" placeholder="model" value={car.model} required readOnly />
          <textarea name="agreement" required onChange={(e) => setAgreement(e.target.value)} />
          <input type="text" required onChange={(e) => setCity(e.target.value)} />
          <input type="date" required onChange={(e) => setDate(e.target.value)} />
          <button type="submit">Make Reservation</button>
        </form>
      </div>
    </section>
  );
};

ReservationForm.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    model: PropTypes.string,
    mileage: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  user: PropTypes.string.isRequired,
};

export default ReservationForm;
