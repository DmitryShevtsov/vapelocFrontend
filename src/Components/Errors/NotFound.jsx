import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return(
      <div className="not-found">
        <h1>
          <div> 404 </div>
          <div> Not found </div>
        </h1>
      </div>
    );
  }
}

export default NotFound;
