import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} style={{width: "100%", height: "500px"}}
           initialCenter={{
             lat: 50.4501,
             lng: 30.5234
           }}>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
        apiKey: ("AIzaSyBIXsvkFHOMnB4qGTdEYkyFR2uNHYxUjD8")
      })(MapContainer)


