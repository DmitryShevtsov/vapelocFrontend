import React, {Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeAuthenticationModal, openAuthenticationModal } from '../../Actions/modalActions';
import Registration from './Registration';
import Authentication from './Authentication';
import '../../Styles/Modals.css';
import '../../Styles/Buttons.css';
import {removeUserErrors} from "../../Actions/userActions";

class ModalComponent extends Component {
  componentWillMount() {
    this.dispatch = this.props.dispatch;
  }

  open = () => {
    this.dispatch(openAuthenticationModal());
  };

  close = () => {
    this.dispatch(closeAuthenticationModal());
    this.dispatch(removeUserErrors());
  };

  render() {
    return (
      <a href="javascript:void(0)" onClick={this.open}> {this.props.children}
        <Modal className="modal"
          isOpen={this.props.state.isOpen}
          contentLabel="Modal">
            <button className="button-close" onClick={this.close}><span>Close</span></button>
          {this.form()}
        </Modal>
      </a>
    );
  }

  form = () => {
    return this.props.state.isAuthModal ? <Authentication/> : <Registration/>
  }
}

export default connect((store) => {
  return({state: store.authenticationModal});
})(ModalComponent);
