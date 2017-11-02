import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AuthorizedUser from './AutorizedUser';
import './Header.css';

class HeaderMenu extends Component {
  render() {
    return (
      <div className='menu'>
        <ul>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/profile'> Profile </Link> </li>
          <AuthorizedUser/>
        </ul>
      </div>
    );
  }
}

export default HeaderMenu;
