import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEachCar } from '../actions/index';
import ReservationForm from '../components/Form';

const SingleCar = () => {
  const { car } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(
      fetchEachCar(id),
    );
  }, []);

  return (
    <div>
      <div key={`car-${car.id}`}>
        <img src={car.image} alt="car" />
        <p>{car.model}</p>
        <p>{car.mileage}</p>
        <p>{car.price}</p>
      </div>
      <ReservationForm car={car} />
    </div>
  );
};

export default SingleCar;
