import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Vapeshop extends Component {
  constructor() {
    super();
    console.log("HELLO");
  }

  render() {
    return (<div>
      <Link to="/"> Hello </Link>
    </div>
    );
  }
}

export default connect((state) => {
  return { state: state }
})(Vapeshop);

