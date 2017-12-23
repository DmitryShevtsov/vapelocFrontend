import '../../Styles/Buttons.css';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import React, {Component} from 'react';
import {openEditVapeshopModal, editVapeshop, closeEditVapeshopModal} from "../../Actions/vapeshopModalActions";

class VapeshopEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let vapeshop = {
      name: this.state.name,
      description: this.state.description
    };
    this.props.changeVapeshop(vapeshop);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  open = () => {
    this.props.openEditVapeshopModal();
  };

  close = () => {
    this.props.closeEditVapeshopModal()
  };


  render() {
    return (
      <a href="javascript:void(0)" onClick={this.open}>
        Edit your vapeshop
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
      </a>);
  }
}

function stateProps(state) {
  return {
    isOpen: state.editVapeshop.isOpen,
    name: state.editVapeshop.name,
    description: state.editVapeshop.description
  }
}

function dispatchToProps(dispatch) {
  return {
    changeVapeshop: (vapeshop) => {
      dispatch(editVapeshop(vapeshop))
    },
    openEditVapeshopModal: () => {
      dispatch(openEditVapeshopModal())
    },
    closeEditVapeshopModal: () => {
      dispatch(closeEditVapeshopModal())
    }

  }
}

export default connect(stateProps, dispatchToProps)(VapeshopEditModal);