import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class VapeshopsList extends Component {
  componentWillMount() {
    this.props.dispatch({ type: 'VAPESHOPS_GET_ALL' });
  }

  render() {
    return (<div>
      Hi,Jack!
      <br/>
      <Link to="/ttt"> To ttt </Link>
    </div>
    );
  }
}

export default connect((state) => {
  return { state: state }
})(VapeshopsList);
