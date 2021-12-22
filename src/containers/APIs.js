const GetCarReservations = () => {
  fetch('http://localhost:3000/reservations/7')
    .then((response) => response.json())
    .then((data) => {
      const reservations = data;
      return reservations;
    });
};

export default GetCarReservations;
