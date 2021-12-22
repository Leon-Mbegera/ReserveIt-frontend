import PropTypes from 'prop-types';

const CarReservations = ({ reservations }) => (
  <div>
    {reservations && reservations.length ? (
      reservations.map((object) => (
        <div key={object.id}>
          <p>{object.agreement}</p>
          <p>{object.city}</p>
          <p>{object.date}</p>
        </div>
      ))
    ) : <p>Just a sec...</p>}
  </div>
);

CarReservations.propTypes = {
  reservations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarReservations;
