import axios from 'axios';

const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';

const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST,
});

const fetchCarsSuccess = (cars) => ({
  type: FETCH_CARS_SUCCESS,
  payload: cars,
});

const fetchCarsFailure = (error) => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});
