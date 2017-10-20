import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Auth/Modal';
import './Header.css';

class HeaderMenu extends Component {
  render() {
    return (
      <div className='menu'>
        <ul>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/profile'> Profile </Link> </li>
          <li className="pull-right"><Modal>Login</Modal></li>
        </ul>
      </div>
    );
  }
}

export default HeaderMenu;
