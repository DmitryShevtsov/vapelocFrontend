import React, {Component} from 'react';
import {connect} from 'react-redux';
import VapeshopListElement from './VapeshopListElement';
import {fetchVapeshops} from '../../Actions/vapeshopActions';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-grid-system';
import NewVapeshopModal from './VapeshopModal';
import {MyMapComponent} from '../Map/Map';
import {MapContainer} from "../Map/MapContainer";

class VapeshopsList extends Component {
  componentWillMount() {
    document.title = 'Vapeshops';
  }

  getAllVapeshopElements() {
    return this.props.vapeshops.vapeshopsList.map((vapeshop) => {
      var link = `/vapeshops/${vapeshop.id}`;
      return (
        <Link key={vapeshop.id} to={link}>
          <Col sm={12} lg={4} md={4}>
            <VapeshopListElement key={vapeshop.id} name={vapeshop.name}/>
          </Col>

        </Link>
      )
    });
  }

  currentUser() {
    if (this.props.currentUser.currentUser) {
      return (<h1>{this.props.currentUser.currentUser.username}</h1>);
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.currentUser()}
        <Row>
          <Col sm={12} md={8} lg={8}>
            {this.getAllVapeshopElements()}
          </Col>
          <Col sm={0} md={4} lg={4}>
            <NewVapeshopModal>Create new vapeshop</NewVapeshopModal>
            <MapContainer/>
          </Col>
        </Row>
      </div>
    );
  }
}

function stateProps(state) {
  return {
    vapeshops: state.vapeshops,
    currentUser: state.user
  }
}

function dispatchToProps(dispatch) {
  return {getVapeshops: dispatch(fetchVapeshops())}
}

export default connect(stateProps, dispatchToProps)(VapeshopsList);