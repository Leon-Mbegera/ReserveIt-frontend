import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <div key={`cars-${car.id}`}>
          <img src={car.image} alt="car" />
          <p>{car.model}</p>
          <p>{car.mileage}</p>
          <p>{car.price}</p>
          <Link to={`/cars/${car.id}`}>view</Link>
        </div>
      ))}
    </main>
  );
};

export default AllCars;
