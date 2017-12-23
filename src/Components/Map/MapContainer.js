import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
render() {
    return (
      <Map google={window.google} zoom={14} style={{width: "100%", height: "500px"}}>
      </Map>
    );
  }
}
