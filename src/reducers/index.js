import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authentication_modal from './authentication_modal';

export default combineReducers({
  routing: routerReducer,
  authentication_modal,
});