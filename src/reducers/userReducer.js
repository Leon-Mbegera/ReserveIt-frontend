import { SAVE_CURRENT_USER, RESET_CURRENT_USER } from '../actions/index';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_CURRENT_USER:
      return { ...state, username: action.payload };
    case RESET_CURRENT_USER:
      return { ...state, username: null };
    default:
      return state;
  }
};

export default userReducer;
