import '../../Styles/Buttons.css';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import React, {Component} from 'react';
import {Row, Col} from 'react-grid-system';
import {
  openNewVapeshopModal, closeNewVapeshopModal, createVapeshop,
  addNewMarker, removeNewMarker
} from "../../Actions/vapeshopModalActions";
import {addVapeshopErrors, removeVapeshopErrors} from "../../Actions/vapeshopActions";
import MapContainer from "../Map/MapContainer";
import {InfoWindow, Marker} from 'google-maps-react';


class NewVapeshopModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  open = () => {
    this.props.openNewVapeshopModal();
  };

  close = () => {
    this.props.removeNewMarker();
    this.props.closeNewVapeshopModal();
    this.props.removeVapeshopErrors();

  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.markerPosition) {
      let vapeshop = {
        name: this.state.name,
        description: this.state.description,
        lat: this.props.markerPosition.lat,
        lng: this.props.markerPosition.lng
      };
      this.props.removeNewMarker();
      this.props.createVapeshop(vapeshop, this.props.currentUser.id);
    }
    else {
      this.props.addVapeshopErrors({message: "Set marker to the map"});
    }

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onMapClick = (mapProps, map, clickEvent) => {
    let latitude = clickEvent.latLng.lat();
    let longitude = clickEvent.latLng.lng();
    this.props.addMarker({lat: latitude, lng: longitude});
  }

  render() {
    return (
      <a href="javascript:void(0)" onClick={this.open}>
        Add new vapeshop
        <Modal
          isOpen={this.props.isOpen}
          contentLabel="Modal">
          <div>
            <Row>Create your shop</Row>
            <Row>
              <Col sm={4} lg={4} md={4}>
                <form onSubmit={this.handleSubmit}>
                  <label style={{color: 'red'}}>
                    {this.props.vapeshop.vapeshopErrors.message}
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
                <MapContainer onMapClick={this.onMapClick} markerPosition={this.props.markerPosition}/>
              </Col>
            </Row>
          </div>
        </Modal>
      </a>
    );
  }
}

function stateProps(state) {
  return {
    isOpen: state.newVapeshopModal.isOpen,
    vapeshop: state.vapeshops,
    currentUser: state.user.currentUser,
    markerPosition: state.newVapeshopModal.markerPosition
  }
}

function dispatchToProps(dispatch) {
  return {
    createVapeshop: (vapeshop, user_id) => {
      dispatch(createVapeshop(vapeshop, user_id))
    },
    openNewVapeshopModal: () => {
      dispatch(openNewVapeshopModal())
    },
    closeNewVapeshopModal: () => {
      dispatch(closeNewVapeshopModal())
    },
    removeVapeshopErrors: () => {
      dispatch(removeVapeshopErrors())
    },
    addMarker: (position) => {
      dispatch(addNewMarker(position))
    },
    removeNewMarker: () => {
      dispatch(removeNewMarker())
    },
    addVapeshopErrors: (payload) => {
      dispatch(addVapeshopErrors(payload))
    }

  }
}

export default connect(stateProps, dispatchToProps)(NewVapeshopModal);
