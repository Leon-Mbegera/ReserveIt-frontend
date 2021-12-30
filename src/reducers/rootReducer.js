import { combineReducers } from 'redux';
import allReducer from './allReducer';
import singleReducer from './singleReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ cars: allReducer, car: singleReducer, user: userReducer });
export default rootReducer;
