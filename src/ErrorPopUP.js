
import { Component } from "react";
import { ModalBody } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class ErrorPopUp extends Component{
    
    handleClose = () =>{
        this.props.closeModal();
    }

    render() {
        return(
            <Modal show={this.props.show} onHide ={this.handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Error status:{this.props.errorStatus}</Modal.Title>
                    </Modal.Header>
                    <ModalBody>
                        <p>Error of grotesque nature </p>
                        <p>Please enter the name of a City</p>
                    </ModalBody>
                    <Modal.Footer>
                        <Button variant ="secondary" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

        )
    }
        
}