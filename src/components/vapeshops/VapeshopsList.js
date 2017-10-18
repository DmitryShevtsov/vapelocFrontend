import React, {Component} from 'react';
import {connect} from 'react-redux';
import VapeshopListElement from "./VapeshopListElement";
import {getVapeshops} from "../../reducers/vapeshops";

class VapeshopsList extends Component {
  getAllVapeshopElements() {
    console.log(this.props.state);
    return this.props.state.map((vapeshop) => {
      return <VapeshopListElement key={vapeshop.id} name={vapeshop.name}/>
    });
  }

  componentWillMount() {
    console.log(this.props.getVapeshops);
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
