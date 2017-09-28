import React, {Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeAuthenticationModal, openAuthenticationModal } from '../../actions/modal_actions';
import Registration from './Registration';
import Authentication from './Authentication';

class ModalComponent extends Component {
  componentWillMount() {
    this.dispatch = this.props.dispatch;
  }

  open = () => {
    this.dispatch(openAuthenticationModal());
  };

  close = () => {
    this.dispatch(closeAuthenticationModal());
  };



  render() {
    return (
      <div>
        <a href="javascript:void(0)" onClick={this.open}> Auth </a>
        <Modal
          isOpen={this.props.state.isOpen}
          contentLabel="Modal">
          <button onClick={this.close}>Close</button>
          {this.form()}
        </Modal>
      </div>
    );
  }

  form = () => {
    return this.props.state.isAuthModal ? <Authentication/> : <Registration/>
  }
}

export default connect((store) => {
  return({state: store.authentication_modal});
})(ModalComponent);
