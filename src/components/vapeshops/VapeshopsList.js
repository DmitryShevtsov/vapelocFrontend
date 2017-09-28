import React, {Component} from 'react';
import {connect} from 'react-redux';
import VapeshopListElement from "./VapeshopListElement";

class VapeshopsList extends Component {
  getAllVapeshopElements() {
    return this.props.state.map((vapeshop) => {
      return <VapeshopListElement/>
    });
  }

  componentWillMount() {
    this.props.dispatch({type: 'VAPESHOPS_GET_ALL'});
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

export default connect((state) => {
  return {state: state.vapeshops}
})(VapeshopsList);
