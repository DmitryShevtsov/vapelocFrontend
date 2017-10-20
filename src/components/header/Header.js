import React, {Component} from 'react';
import './Header.css';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-grid-system';

class Header extends Component {
  render() {
    return (
      <Row className="header">
        <Col sm={12} md={2} lg={2}>
          <Link to="/">
            <img className="logo"
              src="http://media-hearth.cursecdn.com/avatars/252/906/635754873347018821.jpeg?1505776654" alt='VL'/>
          </Link>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <HeaderMenu/>
        </Col>
      </Row>
    );
  }
}

export default Header;

//
// <div>
// </div>
