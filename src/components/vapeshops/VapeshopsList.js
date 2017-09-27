import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class VapeshopsList extends Component {
  openModal = () => {
    this.props.dispatch({type: 'OPEN_AUTHENTICATION_MODAL'});
  };

  render() {
    return (<div>
      Hi,Jack!
      <br/>
      <Link to="/ttt"> To ttt </Link>
      <button onClick={this.openModal}>Open modal</button>
    </div>
    );
  }
}

export default connect((state) => {
  return { state: state }
})(VapeshopsList);
