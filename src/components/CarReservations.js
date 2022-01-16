import PropTypes from 'prop-types';

const CarReservations = ({ reservations, loading, error }) => (
  <div className="reservations">
    {error && <p>{error}</p>}
    {loading && <p>Loading...</p>}
    {reservations && reservations.length
      && reservations.map((object) => (
        <div key={object.id} className="border-b-2 p-2">
          <p>{object.agreement}</p>
          <p>{object.city}</p>
          <p>{object.date}</p>
        </div>
      ))}
  </div>
);

CarReservations.propTypes = {
  reservations: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default CarReservations;
