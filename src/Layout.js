import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
