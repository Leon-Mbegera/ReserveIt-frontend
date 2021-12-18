import {
  FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
} from '../actions/index';

const allReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
      };
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case FETCH_CARS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default allReducer;
