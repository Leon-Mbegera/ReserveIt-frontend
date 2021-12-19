import {
  FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
} from '../actions/index';

const initialState = {
  data: [],
  error: '',
  loading: true,
};

const allReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...initialState,
      };
    case FETCH_CARS_SUCCESS:
      return {
        data: [...action.payload],
        error: '',
        loading: false,
      };
    case FETCH_CARS_FAILURE:
      return {
        data: [],
        error: 'failed!',
        loading: false,
      };
    default:
      return state;
  }
};

export default allReducer;
