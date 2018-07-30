import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {Container, Row, Col} from 'react-grid-system';
import './Styles/Wrapper.css'

class Layout extends Component {
  render() {
    return (
      <Container className='wrapper'>
        <Row>
          <Row>
            <Header/>
          </Row>
          <Row>
            {this.props.children}
          </Row>
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Container>
    );
  }
}

export default Layout;
