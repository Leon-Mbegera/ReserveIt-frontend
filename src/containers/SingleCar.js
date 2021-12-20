import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEachCar } from '../actions/index';

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
      {car.data.map((car) => (
        <div key={`car-${car.id}`}>
          <img src={car.image} alt="car" />
          <p>{car.model}</p>
          <p>{car.mileage}</p>
          <p>{car.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SingleCar;
