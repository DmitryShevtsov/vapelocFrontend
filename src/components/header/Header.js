import React, {Component} from 'react';
import '../../css/Header.css';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-grid-system';

class Header extends Component {
  render() {
    return (
      <div>
        <Row className="Header-spaces">
          <Col sm = {12} md={2} lg={2}>
            <Link to="/">
            <img className="float-center logo-image"
                 src="http://media-hearth.cursecdn.com/avatars/252/906/635754873347018821.jpeg?1505776654" alt='VL'/>
            </Link>
          </Col>
          <Col sm={12} md={10} lg={10} className="Header-search-field">
            <HeaderMenu/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;