import { combineReducers } from 'redux';
import  wildticReducer from './reducer-wildtic';
export default combineReducers({
    wildtic: wildticReducer
})