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
      {car.data.map((each) => (
        <div key={`car-${car.id}`}>
          <img src={each.image} alt="car" />
          <p>{each.model}</p>
          <p>{each.mileage}</p>
          <p>{each.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SingleCar;
