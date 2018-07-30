import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSingleVapeshop, clearActiveVapeshop, deleteVapeshop} from '../../Actions/vapeshopActions';
import VapeshopEditModal from './VapeshopEditModal';
import {Row, Col} from 'react-grid-system';
import MapContainer from "../Map/MapContainer";


class Vapeshop extends Component {
  componentDidMount() {
    document.title = "SINGLE VAPESHOP";
    this.props.getVapeshop(this.props.id);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    if (this.props.vapeshop) {
      return this.renderVapeshop();
    } else {
      return <div>This vapeshop doesn't exist</div>;
    }
  }

  removeVepashop = () => {
    this.props.removeVapeshop(this.props.id)
  };

  renderRemoveVapeshopButton() {
    if (this.props.vapeshop.user_id && this.props.currentUser && this.props.vapeshop.user_id === this.props.currentUser.id) {
      return (<button onClick={this.removeVepashop}>
        Delete vapeshop
      </button>)
    }
    else return <div></div>;
  }

  renderVapeshopEditModal() {
    if (this.props.vapeshop.user_id && this.props.currentUser && this.props.vapeshop.user_id === this.props.currentUser.id) {
      return <VapeshopEditModal/>
    }
    else return <div></div>;
  }

  renderVapeshop() {
    return (<div>
      <Col sm={4} lg={4} md={4}>
        <Row>
          {this.props.vapeshop.name}
        </Row>
        <Row>
          {this.props.vapeshop.description}
        </Row>
        <Row>
          {this.renderVapeshopEditModal()}
        </Row>
        <Row>
          {this.renderRemoveVapeshopButton()}
        </Row>
      </Col>
      <Col sm={8} lg={8} md={8}>
        <MapContainer vapeshops={[this.props.vapeshop]}
                      center={{lat: this.props.vapeshop.lat, lng: this.props.vapeshop.lng}}/>
      </Col>
    </div>);
  }
}


function stateProps(state, ownProps) {
  return {
    vapeshop: state.vapeshops.activeVapeshop,
    id: ownProps.match.params.id,
    currentUser: state.user.currentUser
  };
}

function dispatchToProps(dispatch) {
  return {
    getVapeshop: (id) => {
      dispatch(fetchSingleVapeshop(id))
    },
    reset: () => {
      dispatch(clearActiveVapeshop())
    },
    removeVapeshop: (id) => {
      dispatch(deleteVapeshop(id))
    }
  };
}

export default connect(stateProps, dispatchToProps)(Vapeshop);
