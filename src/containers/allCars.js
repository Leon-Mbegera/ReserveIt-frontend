import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCars } from '../actions/index';

const AllCars = () => {
  const { cars } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAllCars(),
    );
  }, []);

  return (
    <main>
      {cars.data.map((car) => (
        <div key={`car-${car.id}`}>
          <img src={car.image} alt="car" />
          <p>{car.model}</p>
          <p>{car.mileage}</p>
          <p>{car.price}</p>
        </div>
      ))}
    </main>
  );
};

export default AllCars;
