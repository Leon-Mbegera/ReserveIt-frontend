import { combineReducers } from 'redux';
import allReducer from './allReducer';
import singleReducer from './singleReducer';

const rootReducer = combineReducers({ cars: allReducer, car: singleReducer });
export default rootReducer;
