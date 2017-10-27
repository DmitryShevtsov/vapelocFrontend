import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { fetchSingleVapeshop, clearActiveVapeshop} from '../../Actions/vapeshopActions';


class Vapeshop extends Component {
  componentDidMount() {
    document.title = "SINGLE VAPESHOP";
    this.props.getVapeshop(this.props.id);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    if(this.props.vapeshop) {
      return this.renderVapeshop();
    } else {
      return <div></div>;
    }
  }

  renderVapeshop() {
    return (<div>
      {this.props.vapeshop.name}
    </div>);
  }
}

function stateProps(state, ownProps) {
  return {
    vapeshop: state.vapeshops.activeVapeshop,
    id: ownProps.match.params.id
  };
}

function dispatchToProps(dispatch) {
  return {
    getVapeshop: (id) => { dispatch(fetchSingleVapeshop(id)) },
    reset: () => { dispatch(clearActiveVapeshop()) }
  };
}

export default connect(stateProps, dispatchToProps)(Vapeshop);
