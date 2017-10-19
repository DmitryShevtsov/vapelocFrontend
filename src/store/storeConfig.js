import {middleware as fetchMiddleware} from 'react-redux-fetch';
import {reducer as fetchReducer} from 'react-redux-fetch';
import authenticationModal from "../reducers/authenticationModal";
import vapeshops from '../reducers/vapeshops';
import user from '../reducers/user';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

const history = createHistory();

const middleware = routerMiddleware(history);

export default function storeConfig() {
  return createStore(combineReducers({
      authenticationModal,
      vapeshops,
      user,
      routing: routerReducer,
      repository: fetchReducer
    }),
    applyMiddleware(middleware, thunk, fetchMiddleware)
  );
}
