import { useEffect, useState } from 'react';
import { GetMyReservations } from '../containers/APIs';

const MyReservations = () => {
  const [myReserves, setMyReserves] = useState('');
  useEffect(() => {
    GetMyReservations()
      .then((response) => {
        setMyReserves(response);
      });
  }, []);

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
          </div>
        ))
      ) : <p>Just a sec...</p>}
    </>
  );
};

export default MyReservations;
