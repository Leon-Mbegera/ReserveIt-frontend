import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEachCar } from '../actions/index';
import ReservationForm from '../components/ReservationForm';
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
      <div className="grid grid-cols-7 justify-items-center gap-0 mx-6 mt-8">
        <div key={`car-${car.id}`} className="col-span-3">
          <img src={car.image} alt="car" />
        </div>
        <div className="col-span-2">
          <h1 className="text-xl font-bold tracking-wide my-2">Specifications</h1>
          <div className="specifications">
            <p>
              <span className="text-gray-500 font-bold md:text-left pr-2">
                Model:
                {' '}
              </span>
              {car.model}
            </p>
            <p>
              <span className="text-gray-500 font-bold md:text-left pr-2">
                Engine:
                {' '}
              </span>
              {car.engine_type}
            </p>
            <p>
              <span className="text-gray-500 font-bold md:text-left pr-2">
                Transmission:
                {' '}
              </span>
              {car.transmission}
            </p>
            <p>
              <span className="text-gray-500 font-bold md:text-left pr-2">
                Fuel:
                {' '}
              </span>
              {car.fuel_type}
            </p>
            <p>
              <span className="text-gray-500 font-bold md:text-left pr-2">
                Interior color:
                {' '}
              </span>
              {car.interior_color}
            </p>
            <p>
              <span className="text-gray-500 font-bold md:text-left pr-2">
                Exterior color:
                {' '}
              </span>
              {car.exterior_color}
            </p>
            <p>
              <span className="text-gray-500 font-bold md:text-left pr-2">
                Price ksh:
                {' '}
              </span>
              {car.price}
            </p>
          </div>
        </div>
        <div className="grid col-span-2 row-span-3 border-x-2 px-6">
          <div>
            <h1 className="text-xl font-bold tracking-wide my-2">Reservations</h1>
          </div>
          <div className="reservations">
            <CarReservations
              reservations={reserve}
              loading={isPending}
              error={error}
            />
          </div>
        </div>
        <div className="grid col-span-5">
          <ReservationForm car={car} user={user} UpdateReservations={UpdateReservations} />
        </div>
      </div>
    </>
  );
};

export default SingleCar;
