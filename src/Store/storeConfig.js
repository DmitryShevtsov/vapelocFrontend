import {middleware as fetchMiddleware} from 'react-redux-fetch';
import {reducer as fetchReducer} from 'react-redux-fetch';
import authenticationModal from "../Reducers/authenticationModal";
import vapeshops from '../Reducers/vapeshops';
import user from '../Reducers/user';
import newVapeshopModal from '../Reducers/vapeshopModal';
import editVapeshop from '../Reducers/editVapeshopModal';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

const history = createHistory();

const middleware = routerMiddleware(history);

export default function storeConfig() {
  return createStore(combineReducers({
      editVapeshop,
      newVapeshopModal,
      authenticationModal,
      vapeshops,
      user,
      routing: routerReducer,
      repository: fetchReducer
    }),
    applyMiddleware(middleware, thunk, fetchMiddleware)
  );
}
