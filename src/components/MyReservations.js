import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetMyReservations } from '../containers/APIs';

const MyReservations = () => {
  const [myReserves, setMyReserves] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    GetMyReservations()
      .then((response) => {
        setMyReserves(response);
      });
  }, []);

  const handleDelete = (id) => {
    const accessToken = localStorage.getItem('accessToken');
    fetch(`http://localhost:3000/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }).then(() => {
      navigate('/MyReservations');
    });
  };

  return (
    <>
      {myReserves && myReserves.length ? (
        myReserves.map((each) => (
          <div key={each.id}>
            <div>
              <img src={each.car.image} alt="model-pict" />
            </div>
            <p>{each.agreement}</p>
            <p>{each.city}</p>
            <p>{each.date}</p>
            <button type="submit" onClick={() => handleDelete(each.car.id)}>delete</button>
          </div>
        ))
      ) : <p>Just a sec...</p>}
    </>
  );
};

export default MyReservations;
