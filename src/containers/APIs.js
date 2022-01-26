async function GetCarReservations(id) {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const response = await fetch(`http://localhost:3000/reservations/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Could not fetch data!');
    } else {
      const reservations = await response.json();
      return { error: null, data: reservations };
    }
  } catch (error) {
    return { error: error.message, data: null };
  }
}

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

async function UserSignUp(username, email, password, confirm) {
  try {
    const response = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          confirm,
        },
      }),
    });
    if (!response.ok) {
      throw new Error('Please fill in all the fields, and in a proper format!');
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return { error: error.message, data: null };
  }
}

async function UserSignIn(email, password) {
  try {
    const response = await fetch('http://localhost:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        auth: {
          email,
          password,
        },
      }),
    });
    if (!response.ok) {
      throw new Error("You're not yet registered, Please proceed to Sign Up!");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return { error: error.message, data: null };
  }
}

const Authenticate = async (accessToken) => {
  const response = await fetch('http://localhost:3000/auth/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accessToken),
  });
  const data = await response.json();
  return data;
};

export {
  GetCarReservations, GetMyReservations, UserSignUp, UserSignIn, Authenticate,
};
