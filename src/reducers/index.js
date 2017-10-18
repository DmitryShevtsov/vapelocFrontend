import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authentication_modal from './authentication_modal';
import user from './user';
import vapeshops from './vapeshops';

export default combineReducers({
  routing: routerReducer,
  authentication_modal,
  user,
  vapeshops
});