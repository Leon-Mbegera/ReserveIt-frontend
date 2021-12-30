const GetCarReservations = async (id) => {
  const response = await fetch(`http://localhost:3000/reservations/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const reservations = await response.json();
  return reservations;
};

const GetMyReservations = async () => {
  // const accessToken = localStorage.getItem('accessToken');
  const response = await fetch('http://localhost:3000/reservations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${accessToken}`,

    },
  });
  const myreservations = await response.json();
  return myreservations;
};

const UserSignIn = async (email, password) => {
  const response = await fetch('http://localhost:3000/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      auth: {
        email,
        password,
      },
    }),
  });

  const data = await response.json();
  return data;
};

export { GetCarReservations, GetMyReservations, UserSignIn };
