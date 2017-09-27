import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Vapeshop extends Component {
  componentWillMount() {
    console.log(this.props.match.params.id);
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

