import '../../Styles/Buttons.css';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import React, {Component} from 'react';
import {Row, Col} from 'react-grid-system';
import {InfoWindow, Marker} from 'google-maps-react';

import {
  openEditVapeshopModal, editVapeshop, closeEditVapeshopModal,
  addNewMarker, removeNewMarker
} from "../../Actions/vapeshopModalActions";
import MapContainer from "../Map/MapContainer";

class VapeshopEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.vapeshop;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    let vapeshop = this.state;
    vapeshop.lat = this.props.markerPosition.lat;
    vapeshop.lng = this.props.markerPosition.lng;
    this.props.removeNewMarker();
    this.props.changeVapeshop(vapeshop);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  open = () => {
    this.props.openEditVapeshopModal();
  };

  close = () => {
    this.props.removeNewMarker();
    this.props.closeEditVapeshopModal()
  };

  onMapClick = (mapProps, map, clickEvent) => {
    let latitude = clickEvent.latLng.lat();
    let longitude = clickEvent.latLng.lng();
    this.props.addMarker({lat: latitude, lng: longitude});
    this.setState({
      newMarker: <Marker
        position={this.props.markerPosition}
      />
    });
  };

  render() {
    return (
      <a href="javascript:void(0)" onClick={this.open}>
        Edit your vapeshop
        <Modal
          isOpen={this.props.isOpen}
          contentLabel="Modal">
          <div>
            <Row>Edit your shop</Row>
            <Row>
              <Col sm={4} lg={4} md={4}>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    {this.props.errors.message}
                  </label>
                  <label>
                    Name of vapeshop:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                  </label>
                  <label>
                    Description:
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                  </label>
                  <button type="submit" className="button"><span>Submit</span></button>
                </form>
                <button onClick={this.close} className="button-close"><span>Close</span></button>
              </Col>
              <Col sm={8} lg={8} md={8}>
                <MapContainer vapeshops={[this.props.vapeshop]}
                              center={{lat: this.props.vapeshop.lat, lng: this.props.vapeshop.lng}}
                              onMapClick={this.onMapClick} markerPosition={this.props.markerPosition}/>
              </Col>
            </Row>
          </div>
        </Modal>
      </a>);
  }
}

function stateProps(state) {
  return {
    isOpen: state.editVapeshop.isOpen,
    vapeshop: state.vapeshops.activeVapeshop,
    errors: state.vapeshops.vapeshopErrors,
    markerPosition: state.newVapeshopModal.markerPosition

  }
}

function dispatchToProps(dispatch) {
  return {
    changeVapeshop: (vapeshop) => {
      dispatch(editVapeshop(vapeshop))
    },
    openEditVapeshopModal: () => {
      dispatch(openEditVapeshopModal())
    },
    closeEditVapeshopModal: () => {
      dispatch(closeEditVapeshopModal())
    },
    addMarker: (position) => {
      dispatch(addNewMarker(position))
    },
    removeNewMarker: () => {
      dispatch(removeNewMarker())
    }

  }
}

export default connect(stateProps, dispatchToProps)(VapeshopEditModal);