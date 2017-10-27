import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {Container} from 'react-grid-system';

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
