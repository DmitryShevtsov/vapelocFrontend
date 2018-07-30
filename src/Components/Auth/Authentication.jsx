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
    return (
      <div>
        <label style={{color: 'red'}}>
          {this.props.user.errors.message}
        </label>

        <form onSubmit={this.handleSubmit}>
          <label>
            Phone:
            <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
          <button type="submit" className="button"><span>Submit</span></button>
        </form>
        <button onClick={this.props.registrationModal} className="button">Registration*</button>
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
