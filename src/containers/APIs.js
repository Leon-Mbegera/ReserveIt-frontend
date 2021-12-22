const GetCarReservations = (id) => {
  fetch(`http://localhost:3000/reservations/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const reservations = data;
      return reservations;
    });
};

export default GetCarReservations;
