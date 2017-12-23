import '../../Styles/Buttons.css';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import React, {Component} from 'react';
import {openNewVapeshopModal, closeNewVapeshopModal, createVapeshop} from "../../Actions/vapeshopModalActions";

class NewVapeshopModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  open = () => {
    this.props.openNewVapeshopModal();
  };

  close = () => {
    this.props.closeNewVapeshopModal();
  };

  handleSubmit(event) {
    event.preventDefault();
    let vapeshop = {
      name: this.state.name,
      description: this.state.description
    };
    this.props.createVapeshop(vapeshop);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  render() {
    return (
      <a href="javascript:void(0)" onClick={this.open}>
        Add new vapeshop
        <Modal
          isOpen={this.props.isOpen}
          contentLabel="Modal">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name of vapeshop:
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </label>
            <label>
              Description:
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <button className="button button-error" onClick={this.close}>Close</button>
        </Modal>
      </a>
    );
  }
}

function stateProps(state) {
  return {
    isOpen: state.newVapeshopModal.isOpen,
    name: state.newVapeshopModal.name,
    description: state.newVapeshopModal.description

  }
}

function dispatchToProps(dispatch) {
  return {
    createVapeshop: (vapeshop) => {
      dispatch(createVapeshop(vapeshop))
    },
    openNewVapeshopModal: () => {
      dispatch(openNewVapeshopModal())
    },
    closeNewVapeshopModal: () => {
      dispatch(closeNewVapeshopModal())
    }

  }
}

export default connect(stateProps, dispatchToProps)(NewVapeshopModal);
