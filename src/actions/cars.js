import axios from 'axios';

const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
const FETCH_CAR_INFO = 'FETCH_CAR_INFO';
const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';

const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST,
});

const fetchCarInfo = (car) => ({
  type: FETCH_CAR_INFO,
  payload: car,
});

const fetchCarsSuccess = (cars) => ({
  type: FETCH_CARS_SUCCESS,
  payload: cars,
});

const fetchCarsFailure = (error) => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});

const fetchAllCars = () => (dispatch) => {
  dispatch(fetchCarsRequest());
  const endpoint = 'http://localhost:3000/cars';
  axios.get(endpoint).then((response) => {
    const cars = response.data;
    dispatch(fetchCarsSuccess(cars));
  }).catch((err) => {
    dispatch(fetchCarsFailure(err));
  });
};
