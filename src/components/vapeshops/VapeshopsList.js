import React, {Component} from 'react';
import {connect} from 'react-redux';
import VapeshopListElement from "./VapeshopListElement";
import {getVapeshops} from "../../reducers/vapeshops";

class VapeshopsList extends Component {
  getAllVapeshopElements() {
    return this.props.state.map((vapeshop) => {
      return <VapeshopListElement/>
    });
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        Hello
        {this.getAllVapeshopElements()}
      </div>
    );
  }
}

function stateProps(state) {
    return {state: state.vapeshops}
}

function dispatchToProps(dispatch) {
  return { getVapeshops: dispatch(getVapeshops()) }
}

export default connect(stateProps, dispatchToProps)(VapeshopsList);
