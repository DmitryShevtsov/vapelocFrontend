import React,{Component} from 'react';
import { Row, Col, Container } from 'react-grid-system';
import { connect } from 'react-redux';

class Authentication extends Component {
  registrationForm = () => {
    this.props.dispatch({type: 'SHOW_REGISTRATION_MODAL'})
  };
  render() {
    return(
      <Container>
        <h1>Fucking AUTH!!!!!</h1>
        <Row><label htmlFor="phone">Phone</label><input type='tel' id="phone"/></Row>
        <Row><label htmlFor="password">Password</label><input type='text' id="password"/></Row>
        <button onClick={this.close}>Submit</button>
        <button onClick={this.registrationForm}> Register </button>
      </Container>

    );
  }
}

export default connect((store) => {
  return({state: store.authentication_modal});
})(Authentication);