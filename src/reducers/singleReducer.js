import { FETCH_CAR_INFO } from '../actions/index';

const initialState = {
  data: [],
  error: '',
  loading: true,
};

const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR_INFO:
      return {
        data: [...action.payload],
        error: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default singleReducer;
