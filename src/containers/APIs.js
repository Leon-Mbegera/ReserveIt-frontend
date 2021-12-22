const GetCarReservations = async (id) => {
  const response = await fetch(`http://localhost:3000/reservations/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const reservations = await response.json();
  return reservations;
};

export default GetCarReservations;
