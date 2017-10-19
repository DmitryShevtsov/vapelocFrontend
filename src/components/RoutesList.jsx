import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Layout from '../Layout';
import Vapeshop from './vapeshops/Vapeshop';
import NotFound from './errors/NotFound'
import Profile from './profile/Profile';
import VapeshopsList from './vapeshops/VapeshopsList';

class RoutesList extends Component {
  render() {
    return(
      <Layout>
        <Switch>
          <Route exact path="/" component={VapeshopsList} />
          <Route path="/vapeshops/:id" component={Vapeshop} />
          <Route path="/vapeshops" component={VapeshopsList} />
          <Route path="/profile" component={Profile}/>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default RoutesList;
