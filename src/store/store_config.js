import {middleware as fetchMiddleware} from 'react-redux-fetch';
import {reducer as fetchReducer} from 'react-redux-fetch';
import authentication_modal from "../reducers/authentication_modal";
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
      authentication_modal,
      vapeshops,
      user,
      routing: routerReducer,
      repository: fetchReducer
    }),
    applyMiddleware(middleware, thunk, fetchMiddleware)
  );
}
