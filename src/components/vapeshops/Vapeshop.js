import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Vapeshop extends Component {
  componentWillMount() {
  }

  render() {
    return (<div>
      <Link to="/"> Hello </Link>
    </div>
    );
  }
}

function stateProps() {
}

function dispatchToProps() {
}

export default connect((state, ownProps) => {
  return { state: state }
})(Vapeshop);
