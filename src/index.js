import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import VapeshopsList from './components/vapeshops/VapeshopsList';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Vapeshop from './components/vapeshops/Vapeshop';
import NotFound from './components/errors/NotFound'
import Profile from "./components/profile/Profile";
import storeConfig from "./store/store_config";
import { ConnectedRouter } from 'react-router-redux';

const history = createHistory();
const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={VapeshopsList} />
          <Route path="/vapeshops" component={VapeshopsList} />
          <Route path="/vapeshops/:id" component={Vapeshop} />
          <Route path="/profile" component={Profile}/>
          <Route component={NotFound} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
