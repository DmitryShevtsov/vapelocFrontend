import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class HeaderMenu extends Component {
  render() {
    return (
      <div className='Header-menu'>
        <ul>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/'> Home </Link> </li>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/'> Home </Link> </li>
        </ul>
      </div>
    );
  }
}

export default HeaderMenu;