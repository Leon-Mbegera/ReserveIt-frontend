import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEachCar } from '../actions/index';
import ReservationForm from '../components/Form';
import CarReservations from '../components/CarReservations';
import { GetCarReservations } from './APIs';

const SingleCar = () => {
  const { car } = useSelector((state) => state);
  const { user } = useSelector((state) => state);
  const [reserve, setReserve] = useState('');
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(
      fetchEachCar(id),
    );
  }, []);

  const UpdateReservations = () => {
    GetCarReservations(id)
      .then((response) => {
        if (response.error) {
          setIsPending(false);
          setError(response.error);
        } else if (response.data) {
          setReserve(response.data);
          setIsPending(false);
          setError(null);
        }
      });
  };

  useEffect(() => {
    UpdateReservations();
  }, [id]);

  return (
    <>
      <div className="grid grid-cols-3">
        <div key={`car-${car.id}`}>
          <img src={car.image} alt="car" />
        </div>
        <div>
          <p>{car.model}</p>
          <p>{car.engine_type}</p>
          <p>{car.transmission}</p>
          <p>{car.fuel_type}</p>
          <p>{car.interior_color}</p>
          <p>{car.exterior_color}</p>
          <p>{car.price}</p>
        </div>
        <div className="grid row-span-3">
          <CarReservations
            reservations={reserve}
            loading={isPending}
            error={error}
          />
        </div>
        <div className="grid col-span-2">
          <ReservationForm car={car} user={user} UpdateReservations={UpdateReservations} />
        </div>
      </div>
    </>
  );
};

export default SingleCar;
