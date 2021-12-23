import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEachCar } from '../actions/index';
import ReservationForm from '../components/Form';
import CarReservations from '../components/CarReservations';
import { GetCarReservations } from './APIs';

const SingleCar = () => {
  const { car } = useSelector((state) => state);
  const [reserve, setReserve] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(
      fetchEachCar(id),
    );
  }, []);

  useEffect(() => {
    GetCarReservations(id)
      .then((response) => {
        setReserve(response);
      });
  }, [id]);

  return (
    <div>
      <div key={`car-${car.id}`}>
        <img src={car.image} alt="car" />
        <p>{car.model}</p>
        <p>{car.mileage}</p>
        <p>{car.price}</p>
      </div>
      <ReservationForm car={car} />
      <CarReservations reservations={reserve} />
    </div>
  );
};

export default SingleCar;
