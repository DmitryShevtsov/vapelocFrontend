import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Modal from '../auth/Modal';

class HeaderMenu extends Component {
  render() {
    return (
      <div className='Header-menu'>
        <ul>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/profile'> Profile </Link> </li>
          <li><Link to='/'> Home </Link></li>
          <li className='pull-right'><Modal/></li>
        </ul>
      </div>
    );
  }
}

export default HeaderMenu;