import React,{Component} from 'react';
import { Row, Container } from 'react-grid-system';
import { connect } from 'react-redux';

class Registration extends Component {
  authForm = () => {
    this.props.dispatch({type:'SHOW_AUTHENTICATION_MODAL'});
  };

  render() {
    return(
      <Container>
        <h1>Fucking REGISTRATION!!</h1>
        <Row> <label htmlFor="name">Name</label><input type='text' id="name"/></Row>
        <Row><label htmlFor="phone">Phone</label><input type='tel' id="phone"/></Row>
        <Row><label htmlFor="password">Password</label><input type='text' id="password"/></Row>
        <button onClick={this.close}>Submit</button>
        <button onClick={this.authForm}>Authentication</button>
      </Container>

    );
  }
}

export default connect((store) => {
  return({state: store.authentication_modal});
})(Registration);