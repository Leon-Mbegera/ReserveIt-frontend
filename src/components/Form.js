import { useState } from 'react';
import PropTypes from 'prop-types';

const ReservationForm = ({ car, user }) => {
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

  const PostReservationDetails = () => {
    fetch('http://localhost:3000/reservations', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  };

  return (
    <section>
      <div>
        <form>
          <input type="text" placeholder="username" value={user.username} />
          <input type="text" placeholder="model" value={car.model} readOnly />
          <textarea name="agreement" onChange={(e) => handleAgreement(e)} />
          <input type="text" onChange={(e) => handleCity(e)} />
          <input type="date" onChange={(e) => handleDate(e)} />
          <button type="button" onClick={PostReservationDetails}>Reserve</button>
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
  user: PropTypes.objectOf.isRequired,
};

export default ReservationForm;
