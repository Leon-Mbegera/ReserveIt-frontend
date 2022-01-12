import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { fetchAllCars } from '../actions/index';

const AllCars = () => {
  const { cars } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAllCars(),
    );
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <Carousel breakPoints={breakPoints}>
        {cars.data.map((car) => (
          <div key={`cars-${car.id}`} className="w-52">
            <img src={car.image} alt="car" />
            <p>{car.model}</p>
            <Link to={`/cars/${car.id}`}>view</Link>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default AllCars;
