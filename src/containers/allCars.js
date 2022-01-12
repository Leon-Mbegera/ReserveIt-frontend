import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { fetchAllCars } from '../actions/index';
import '../App.css';

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
      <div className="wrapper">
        <div className="mt-16 mb-10">
          <h1 className="text-center">LATEST MODELS</h1>
          <p className="text-center">please select a car model</p>
        </div>
        <Carousel breakPoints={breakPoints}>
          {cars.data.map((car) => (
            <div key={`cars-${car.id}`} className="w-64">
              <img src={car.image} alt="car" />
              <p>{car.model}</p>
              <Link to={`/cars/${car.id}`}>view</Link>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default AllCars;
