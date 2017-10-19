import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authenticationModal from './authenticationModal';
import user from './user';
import vapeshops from './vapeshops';

export default combineReducers({
  routing: routerReducer,
  authenticationModal,
  user,
  vapeshops
});
