import React, {Component} from 'react';
import {Row, Container} from 'react-grid-system';
import {connect} from 'react-redux';
import {showRegistrationModal} from "../../Actions/modalActions";
import {loginUser} from "../../Actions/userActions";

class Authentication extends Component {
  registrationForm = () => {
    this.props.dispatch(showRegistrationModal());
  };

  submit = () => {
    user = {
      user: {
        phone: ,
        password: 
      }
    };
    loginUser(user);
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

function stateProps(state) {
  return {
    user: state.user
  };
}

function dispatchToProps(dispatch) {
  return {
    loginUser: (user) => { dispatch(loginUser(user)) }
  };
}


export default connect(stateProps, dispatchToProps)(Authentication);
