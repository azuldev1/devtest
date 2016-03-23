import React from "react";
import { Button, Modal } from 'react-bootstrap';

export default class ModalExample extends React.Component {
  constructor(){
    super();
    this.state = {
      showModal: false
    }
  }

  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}>Open a modal</Button>
          
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close.bind(this)} bsStyle="primary">Save changes</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
};