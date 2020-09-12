import React, { Component } from 'react';

import '../css/MainPage.css';
import '../css/CycleSelect.css'

class CycleSelect extends Component{


    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="content-box cycle-box centered">
                <p className="centered_text">Like what you see?</p>
                <p className="centered_text">Click below to sign up.</p>
                <div className={'button-box centered'}>
                    <button className={'button'} onClick={this.props.prevImage}>Prev</button>
                    <button className={'button center'} onClick={this.props.showModal}>SignUP</button>
                    <button className={'button right'} onClick={this.props.nextImage}>Next</button>

                </div>
            </div>
        )
    }
}

export default CycleSelect