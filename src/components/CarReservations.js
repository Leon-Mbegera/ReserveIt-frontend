import GetCarReservations from '../containers/APIs';

const CarReservations = () => {
  const reservations = GetCarReservations();

  return (
    <div>
      {reservations && reservations.length ? (
        reservations.map((object) => (
          <div key={object.id}>
            <h3>Username</h3>
            <p>{object.agreement}</p>
            <p>{object.city}</p>
            <p>{object.date}</p>
          </div>
        ))
      ) : <p>Just a sec...</p>}
    </div>
  );
};

export default CarReservations;
