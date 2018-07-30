import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapComponent from './Map';


export class MapContainer extends React.Component {



  render() {
    return (
      <MapComponent google={this.props.google} zoom={14} style={{width: "100%", height: "100%"}}
                    initialCenter={this.props.center ? this.props.center : {
                      lat: 50.4501,
                      lng: 30.5234
                    }}
                    onClick={this.props.onMapClick}
                    markerPosition={this.props.markerPosition}
                    vapeshops={this.props.vapeshops}
      />


    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyBIXsvkFHOMnB4qGTdEYkyFR2uNHYxUjD8")
})(MapContainer)


