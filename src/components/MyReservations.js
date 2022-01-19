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
      <div>
        <div className="my-10">
          <h1 className="text-center text-2xl font-extrabold tracking-wider">My Reservations</h1>
          <p className="text-center text-xs font-bold text-stone-400">Confirmed Vehicle Reservations</p>
        </div>
        <div className="flex flex-row flex-wrap justify-around space-x-8 space-y-3 my-4">
          {myReserves && myReserves.length ? (
            myReserves.map((each) => (
              <div key={each.id} className="display w-5/12 flex border border-gray-400 rounded">
                <div className="border-r border-gray-400 bg-cover w-3/6">
                  <img src={each.car.image} alt="model-pict" />
                </div>
                <div className="w-3/6 p-2">
                  <div className="h-2/6 mb-6">
                    <p className="text-gray-600 font-semibold text-base mb-2 quicksand">{each.agreement}</p>
                  </div>
                  <div className="h-2/6 mb-2">
                    <p className="uppercase text-base font-bold tracking-wide my-2 quicksand">{each.city}</p>
                    <p>{each.date}</p>
                  </div>
                  <button type="submit" onClick={() => handleDelete(each.id)} className="bg-green hover:bg-blue-700 text-white font-bold p-1 rounded w-full">delete</button>
                </div>
              </div>
            ))
          ) : <p>Just a sec...</p>}
        </div>
      </div>
    </>
  );
};

export default MyReservations;
