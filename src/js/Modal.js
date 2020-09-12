import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/Modal.css';

class Modal extends Component {
    render() {
        return (
            <div className="modal" onClick={this.props.closeModal}>
                <div className={"modal-box"}></div>
            </div>
        );
    }
}

export default Modal;
