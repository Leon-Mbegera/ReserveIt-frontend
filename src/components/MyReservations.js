import { useEffect, useState } from 'react';
import { GetMyReservations } from '../containers/APIs';

const MyReservations = () => {
  const [myReserves, setMyReserves] = useState('');

  const UpdateMyReservation = () => {
    GetMyReservations()
      .then((response) => {
        setMyReserves(response);
      });
  };

  useEffect(() => {
    UpdateMyReservation();
  }, []);

  const handleDelete = (id) => {
    const accessToken = localStorage.getItem('accessToken');
    fetch(`http://localhost:3000/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ id }),
    }).then(() => {
      UpdateMyReservation();
    });
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-between space-x-8 space-y-3 my-4">
        {myReserves && myReserves.length ? (
          myReserves.map((each) => (
            <div key={each.id} className="w-5/12 flex border-2 border-red-400 rounded">
              <div className="border-r-2 border-red-400 bg-cover w-3/6">
                <img src={each.car.image} alt="model-pict" />
              </div>
              <div className="w-3/6 p-2">
                <div className="h-2/6 mb-6">
                  <p className="text-gray-500 font-bold text-base mb-2">{each.agreement}</p>
                </div>
                <div className="h-2/6 mb-2">
                  <p className="uppercase text-base font-semibold tracking-wide my-2">{each.city}</p>
                  <p>{each.date}</p>
                </div>
                <button type="submit" onClick={() => handleDelete(each.id)}>delete</button>
              </div>
            </div>
          ))
        ) : <p>Just a sec...</p>}
      </div>
    </>
  );
};

export default MyReservations;
