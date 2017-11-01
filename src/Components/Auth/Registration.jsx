import React,{Component} from 'react';
import { Row, Container } from 'react-grid-system';
import { connect } from 'react-redux';
import { showAuthenticationModal} from "../../Actions/modalActions";
import {createUser} from "../../Actions/userActions";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let user = {
      phone: this.state.phone,
      password: this.state.password,
      username: this.state.username
    };
    this.props.registerUser(user);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Phone:
            <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
          <label>
            Name:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.props.authenticationModal}>Authentication</button>
      </div>

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
    authenticationModal: () => {
      dispatch(showAuthenticationModal())
    },
    registerUser: (user) => {
      dispatch(createUser(user))
    }
  }
}

export default connect(stateProps, dispatchToProps)(Registration);
