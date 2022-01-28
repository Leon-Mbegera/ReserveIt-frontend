import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { fetchAllCars } from '../actions/index';
import '../App.css';

const AllCars = () => {
  const { cars } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        fetchAllCars(),
      );
      setLoading(false);
    }, 1000);
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
          <h1 className="text-center text-2xl font-extrabold tracking-wider">LATEST MODELS</h1>
          <p className="text-center text-xs font-bold text-stone-400">Please select a Vehicle Model</p>
          <p className="text-center text-base font-bold text-stone-300 mb-6 mt-4">.................</p>
        </div>
        {Loading && <h1 className="text-center my-4 font-bold">Loading...</h1>}
        <Carousel breakPoints={breakPoints}>
          {cars.data.map((car) => (
            <div key={`cars-${car.id}`} className="w-64">
              <div className="image-div">
                <img src={car.image} alt="car" />
              </div>
              <div>
                <p className="text-center uppercase font-bold">{car.model}</p>
                <p className="text-center backdrop-contrast-50 mt-2 quicksand font-bold">
                  <Link to={`/cars/${car.id}`}>View Details</Link>
                </p>
                <p className="text-center text-base font-bold text-stone-300 mb-6 mt-4">..........</p>
              </div>
              <div className="flex flex-row justify-center space-x-4 text-xl text-stone-500">
                <button type="button" aria-label="facebook"><FaFacebook /></button>
                <button type="button" aria-label="twitter"><FaTwitter /></button>
                <button type="button" aria-label="insta"><FaInstagram /></button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default AllCars;
