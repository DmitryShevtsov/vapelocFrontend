import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { fetchSingleVapeshop} from "../../Actions/vapeshopActions";


class Vapeshop extends Component {
  componentWillMount() {
    document.title = "SINGLE VAPESHOP";
  }

  render() {
    return (<div>
      <Link to="/"> Hello </Link>
    </div>
    );
  }
}

function stateProps(state, ownProps) {
  return { state: state, id: ownProps.match.params.id };
}

function dispatchToProps(dispatch, dispatchProps) {
  return { getVapeshop: dispatch(fetchSingleVapeshop(dispatchProps.match.params.id))};
}

export default connect(stateProps, dispatchToProps)(Vapeshop);
