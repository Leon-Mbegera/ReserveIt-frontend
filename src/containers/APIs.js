const GetCarReservations = async (id) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await fetch(`http://localhost:3000/reservations/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const reservations = await response.json();
  return reservations;
};

const GetMyReservations = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await fetch('http://localhost:3000/reservations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const myreservations = await response.json();
  return myreservations;
};

const UserSignUp = async (username, email, password, confirm) => {
  const response = await fetch('http://localhost:3000/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: {
        username,
        email,
        password,
        confirm,
      },
    }),
  });

  const data = await response.json();
  return data;
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

export {
  GetCarReservations, GetMyReservations, UserSignUp, UserSignIn,
};
