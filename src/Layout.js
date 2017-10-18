import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/Header";

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}


export default Layout;
