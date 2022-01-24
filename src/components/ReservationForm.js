import { useState } from 'react';
import PropTypes from 'prop-types';

const ReservationForm = ({ car, user, UpdateReservations }) => {
  const [agreement, setAgreement] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [isPending, setIsPending] = useState(false);
  const { username } = user;

  const handleReservationDetails = (e) => {
    e.preventDefault();
    const details = {
      reservation: {
        car_id: car.id, agreement, city, date,
      },
    };
    setIsPending(true);
    const accessToken = localStorage.getItem('accessToken');
    fetch('https://damp-eyrie-37878.herokuapp.com//reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(details),
    }).then(() => {
      setIsPending(false);
      UpdateReservations();
    });
  };

  return (
    <section>
      <div>
        <form onSubmit={handleReservationDetails} className="w-full -mt-3">
          <div className="flex flex-wrap space-x-8">
            <div className="">
              <label htmlFor="username" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-1 pr-4 text-left">Username:</label>
              <input type="text" id="username" placeholder="username" value={username} required readOnly className="appearance-none block w-full bg-gray-200 text-gray-700 rounded p-2 mb-2 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div>
              <label htmlFor="model" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-1 pr-4 text-left">Model:</label>
              <input
                type="text"
                id="model "
                placeholder="model"
                value={car.model}
                required
                readOnly
                className="appearance-none uppercase block w-full bg-gray-200 text-gray-700 rounded p-2 mb-3 leading-tight focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="model" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-1 pr-4 text-left">City:</label>
              <input type="text" maxLength="10" className="appearance-none block w-full bg-gray-200 text-gray-700 rounded p-2 mb-3 leading-tight border focus:border-red-500 focus:bg-white focus:outline-none" required onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="model" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-1 pr-4 text-left">Set Agreement:</label>
            <textarea name="agreement" required onChange={(e) => setAgreement(e.target.value)} maxLength="70" className="appearance-none block w-full bg-gray-200 text-gray-700 rounded p-2 mb-3 leading-tight border focus:border-red-500 focus:bg-white focus:outline-none" />
            <div className="flex flex-row justify-between">
              <div>
                <label htmlFor="model" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-1 pr-4 text-left">Select date:</label>
                <input type="date" required onChange={(e) => setDate(e.target.value)} className="appearance-none w-full bg-gray-200 text-gray-700 rounded p-2 mb-3 leading-tight border focus:border-red-500 focus:bg-white focus:outline-none" />
              </div>
              { !isPending && <button type="submit" className="bg-green hover:bg-blue-700 text-white font-bold p-2 rounded h-10 align-middle self-center">Make Reservation</button> }
              { isPending && <button type="button" disabled>Making Reservation ...</button> }
            </div>
          </div>
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
  UpdateReservations: PropTypes.func.isRequired,
};

export default ReservationForm;
