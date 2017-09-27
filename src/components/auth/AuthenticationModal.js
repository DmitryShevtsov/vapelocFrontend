import React, {Component} from 'react';
import Modal from 'react-modal';
import { Container, Row, Col } from 'react-grid-system';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeAuthenticationModal, openAuthenticationModal } from '../../actions/modal_actions';

class AuthenticationModal extends Component {
  componentWillMount() {
    this.dispatch = this.props.dispatch;
  }

  open = () => {
    this.dispatch(openAuthenticationModal());
  }

  close = () => {
    this.dispatch(closeAuthenticationModal());
  };

  render() {
    return (
      <div>
        <button onClick={this.open}> Open Dialog </button>
        <Modal
          isOpen={this.props.state.isOpen}
          aria={{
            labelledby: "heading",
            describedby: "full_description"
          }}>
          <Container>
            <Col md={4} lg={4} sm={12} xl={4}>fsdfsdf sfsdf dsfs daf sdafsd fdsaf sdaf sdf sdafsd afsd ffsd</Col>
            <Col md={4} lg={4} sm={12} xl={4}>fsdfsdf sfsdf dsfs daf sdafsd fdsaf sdaf sdf sdafsd afsd ffsd</Col>
            <Col md={4} lg={4} sm={12} xl={4}>fsdfsdf sfsdf dsfs daf sdafsd fdsaf sdaf sdf sdafsd afsd ffsd</Col>
            <button onClick={this.close}>CLOSE FUCKING MODAL</button>
            <Link to="/ttt">TTt </Link>
          </Container>
        </Modal>
      </div>
    );
  }
}

export default connect((store) => {
  return({state: store.authentication_modal});
})(AuthenticationModal);
