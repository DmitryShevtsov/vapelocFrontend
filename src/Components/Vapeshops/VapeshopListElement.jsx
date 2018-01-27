import React, {Component} from 'react';

class VapeshopListElement extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h4>{this.props.description}</h4>
      </div>
    );
  }
}

export default VapeshopListElement;
