import React, { Component } from 'react';
import {connect} from "react-redux";
import MapContainer from "../Map/MapContainer";

class Profile extends Component {
  render() {
    return (
      <div>User profile
      </div>
    );
  }
}

export default connect((state) => {
  return { user: state.user }
})(Profile);