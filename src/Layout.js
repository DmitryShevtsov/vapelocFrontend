import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Row, Col, Container } from 'react-grid-system';

class Layout extends Component {
  render() {
    return (
      <Container>
        <Header />
        {this.props.children}
        <Footer />
      </Container>
    );
  }
}

export default Layout;
