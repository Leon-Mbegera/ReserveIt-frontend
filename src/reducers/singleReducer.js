import { FETCH_CAR_INFO } from '../actions/index';

const singleReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CAR_INFO:
      return { ...action.payload };
    default:
      return state;
  }
};

export default singleReducer;
