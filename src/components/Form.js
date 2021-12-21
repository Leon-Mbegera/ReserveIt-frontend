import { useState } from 'react';

const ReservationForm = () => {
  const [agreement, setAgreement] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const handleAgreement = (e) => setAgreement(e.target.value);

  const handleCity = (e) => setCity(e.target.value);

  const handleDate = (e) => setDate(e.target.value);

    <div>
      <form>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="model" />
        <textarea name="agreement" />
        <input type="text" />
        <button type="button">Reserve</button>
      </form>
    </div>;
};

export default ReservationForm;
