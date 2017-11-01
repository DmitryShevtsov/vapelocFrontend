import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showRegistrationModal} from "../../Actions/modalActions";
import {loginUser} from "../../Actions/userActions";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: ''
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
      password: this.state.password
    };
    this.props.loginUser(user);
  }

  render() {
    console.log("RENDER");
    return (
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
          <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.props.registrationModal}>Registration</button>
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
    loginUser: (user) => {
      dispatch(loginUser(user))
    },
    registrationModal: () => {
      dispatch(showRegistrationModal())
    }
  };
}

export default connect(stateProps, dispatchToProps)(Authentication);
