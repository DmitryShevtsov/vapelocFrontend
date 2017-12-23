import React, {Component} from 'react';
import Modal from '../Auth/AuthModal';
import {connect} from 'react-redux';
import {logoutUser, removeUser} from "../../Actions/userActions";
import {closeAuthenticationModal} from "../../Actions/modalActions";


class AutorizedUser extends Component {
  render() {
    if (this.props.currentUser.currentUser) {
      return this.user();
    } else {
      return this.guest();
    }
  }

  guest = () => {
    return (
      <li><Modal>Login</Modal></li>
    )
  };

  user = () => {
    return (
      <li>
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
      dispatch(logoutUser(user));
      dispatch(closeAuthenticationModal())
    }
  }

};

export default connect(stateProps, dispatchToProps)(AutorizedUser);


