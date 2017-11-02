import React, {Component} from 'react';
import Modal from '../Auth/Modal';
import {connect} from 'react-redux';
import {logoutUser, removeUser} from "../../Actions/userActions";
import {closeAuthenticationModal} from "../../Actions/modalActions";


class AutorizedUser extends Component {
  render() {
    if (this.props.currentUser) {
      return this.user();
    } else {
      return this.guest();
    }
  }

  guest = () => {
    return (
      <li className="pull-right"><Modal>Login</Modal></li>
    )
  };

  user = () => {
    return (
      <li className="pull-right">
        <a href="javascript:void(0)" onClick={this.logout}>Logout</a>
      </li>
    )
  };

  logout = () => {
    this.props.logout(this.props.currentUser);
  };
}

function stateProps(state) {
  return {
    currentUser: state.user
  };
}

function dispatchToProps(dispatch) {
  return {
    logout: user => {
      dispatch(logoutUser(user))
      dispatch(closeAuthenticationModal())
    }
  }

};

export default connect(stateProps, dispatchToProps)(AutorizedUser);


