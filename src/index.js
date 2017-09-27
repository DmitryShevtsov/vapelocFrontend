import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import VapeshopsList from './components/vapeshops/VapeshopsList';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router';
import {syncHistoryWithStore, routerReducer, routerMiddleware, ConnectedRouter} from 'react-router-redux';
import authentication_modal from "./reducers/authentication_modal";
import createHistory from 'history/createBrowserHistory';
import Vapeshop from './components/vapeshops/Vapeshop';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    authentication_modal: authentication_modal,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path="/ttt" component={Vapeshop} />
          <Route path="/" component={VapeshopsList} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
