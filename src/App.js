import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import AuthenticationModal from './components/auth/AuthenticationModal';
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AuthenticationModal/>
        {this.props.children}
      </div>
    );
  }
}


export default App;
