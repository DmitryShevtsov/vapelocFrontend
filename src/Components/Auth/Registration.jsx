import React, {Component} from 'react';
import {Row, Container} from 'react-grid-system';
import {connect} from 'react-redux';
import {showAuthenticationModal} from "../../Actions/modalActions";
import {createUser, registrateUser} from "../../Actions/userActions";

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
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <label style={{color: 'red'}}>{this.props.user.errors.message}</label>
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
          <button type="submit" className="button"><span>Submit</span></button>
        </form>
        <button onClick={this.props.authenticationModal} className="button">Authentication</button>
      </div>

    );
  }

  phoneLabel = () => {
    if (this.props.user.errors.phone.length > 0) {
      return {
        errorType: this.props.user.errors.phone,
        style: {
          color: 'red'
        }
      }
    }
    return {
      errorType: null,
      style: {}
    };
  };


  nameLabel = () => {
    if (this.props.user.errors.username.length > 0) {
      return {
        errorType: this.props.user.errors.username,
        style: {
          color: 'red'
        }
      }
    }
    return {
      errorType: null,
      style: {}
    };
  };

  passwordLabel = () => {
    if (this.props.user.errors.password.length > 0) {
      return {
        errorType: this.props.user.errors.password,
        style: {
          color: 'red'
        }
      }
    }
    return {
      errorType: null,
      style: {}
    };
  };
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
      dispatch(registrateUser(user))
    }
  }
}

export default connect(stateProps, dispatchToProps)(Registration);
