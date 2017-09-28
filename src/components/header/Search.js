import React, {Component} from 'react';
import {Column, Row, Button} from 'react-foundation';

class Search extends Component {
  render() {
    return (
      <Row>
        <Column medium={11} small={11} large={11}><input type="text"/></Column>
        <Column medium={1} small={1} large={1}> <Button>Hello</Button></Column>
      </Row>);
  }
}

export default Search;