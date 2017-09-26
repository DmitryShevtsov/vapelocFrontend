import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import AuthenticationModal from './components/auth/AuthenticationModal';

class App extends Component {
  openModal = () => {
    this.props.dispatch({ type: 'OPEN_AUTHENTICATION_MODAL' });
    console.log(this.props.state.authentication_modal);
  };

  render() {
    return (
      <div className="App">
        <AuthenticationModal/>
        {this.props.state.authentication_modal.isOpen}
        <button onClick={this.openModal}>OPEN MODAL</button>
        {this.props.children}

      </div>
    );
  }

  componentWillMount() {
  }
}


export default connect((state) => {
  return { state: state }
})(App);
