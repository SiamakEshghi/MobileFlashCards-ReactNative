import { combineReducers } from 'redux';
import decksReducer from '../Public/reducer';

export default combineReducers({ 
    dec: decksReducer
 });
