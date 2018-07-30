import {Component} from "react";
import React from 'react';
import {connect} from "react-redux";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {addActiveMarker, hideInfoWindow, removeActiveMarker, showInfoWindow} from "../../Actions/mapActions";
import {Link} from 'react-router-dom';



class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {}

    }
  }

  onMarkerClick = (props, marker, e) => {
    this.props.removeActiveMarker();
    this.state.selectedPlace = props;
    this.props.addActiveMarker(marker);
    this.props.showInfoWindow();
  }

  getMarkers() {
    if (this.props.vapeshops) {
      return this.props.vapeshops.map((vapeshop) => {
        let latLng = {lat: vapeshop.lat, lng: vapeshop.lng};
        return <Marker key={vapeshop.id}
                       title={vapeshop.name}
                       position={latLng}
                       id={vapeshop.id}
                       description={vapeshop.description}
                       onClick={this.onMarkerClick}
        />
      })
    }
    else return null;
  }



  render() {
    return (
      <Map google={this.props.google} zoom={14} style={{width: "100%", height: "70vh"}}
           initialCenter={this.props.center ? this.props.center : {
             lat: 50.4501,
             lng: 30.5234
           }}
           onClick={this.props.onClick}
      >
        {this.props.markerPosition ? <Marker
          position={this.props.markerPosition}
        /> : this.getMarkers()}
        <InfoWindow
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}
        >
          <a href={`/vapeshops/${this.state.selectedPlace.id}`}>
            <div>
              <h1>{this.state.selectedPlace.title}</h1>
              <p>{this.state.selectedPlace.description}</p>
            </div>
          </a>
        </InfoWindow>
      </Map>
    );
  }
}

function stateProps(state) {
  return {
    showingInfoWindow: state.map.showingInfoWindow,
    activeMarker: state.map.activeMarker,
  };
}

function dispatchToProps(dispatch) {
  return {
    addActiveMarker: (payload) => dispatch(addActiveMarker(payload)),
    removeActiveMarker: () => dispatch(removeActiveMarker()),
    showInfoWindow: () => dispatch(showInfoWindow()),
    hideInfoWindow: () => dispatch(hideInfoWindow())
  };
}

export default connect(stateProps, dispatchToProps)(MapComponent)