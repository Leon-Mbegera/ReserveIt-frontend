import axios from 'axios';

const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
const FETCH_CAR_INFO = 'FETCH_CAR_INFO';
const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';
const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER';

const saveCurrentUser = (user) => ({
  type: SAVE_CURRENT_USER,
  payload: user,
});

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
  const endpoint = 'https://reserveit-api.herokuapp.com/cars';
  axios.get(endpoint).then((response) => {
    const cars = response.data;
    dispatch(fetchCarsSuccess(cars));
  }).catch((err) => {
    dispatch(fetchCarsFailure(err));
  });
};

const fetchEachCar = (id) => (dispatch) => {
  const endpoint = `https://reserveit-api.herokuapp.com/cars/${id}`;
  axios.get(endpoint).then((response) => {
    const car = response.data;
    dispatch(fetchCarInfo(car));
  });
};

export {
  FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS, FETCH_CAR_INFO,
  FETCH_CARS_FAILURE, SAVE_CURRENT_USER, fetchCarsRequest, fetchCarInfo, fetchCarsSuccess,
  fetchCarsFailure, fetchAllCars, fetchEachCar, saveCurrentUser,
};
