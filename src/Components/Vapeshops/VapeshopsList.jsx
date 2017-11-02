import React, {Component} from 'react';
import {connect} from 'react-redux';
import VapeshopListElement from './VapeshopListElement';
import { fetchVapeshops } from '../../Actions/vapeshopActions';
import { Link } from 'react-router-dom';

class VapeshopsList extends Component {
  componentWillMount() {
    document.title = 'Vapeshops';
  }

  getAllVapeshopElements() {
    return this.props.vapeshops.vapeshopsList.map((vapeshop) => {
      var link = `/vapeshops/${vapeshop.id}`;
      return(
        <Link key={vapeshop.id} to={link}>
          <VapeshopListElement key={vapeshop.id} name={vapeshop.name}/>
        </Link>
      )
    });
  }

  currentUser() {
    if(this.props.currentUser) {
      return(<h1>{this.props.currentUser.username}</h1>);
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.currentUser()}
        {this.getAllVapeshopElements()}
      </div>
    );
  }
}

function stateProps(state) {
    return { vapeshops: state.vapeshops,
    currentUser: state.user }
}

function dispatchToProps(dispatch) {
  return { getVapeshops: dispatch(fetchVapeshops()) }
}

export default connect(stateProps, dispatchToProps)(VapeshopsList);
