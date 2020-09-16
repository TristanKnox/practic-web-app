import React, { Component } from 'react';
import '../css/RegistrationThumbnail.css';
import Routes from "./Routs";

class RegistrationThumbnail extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.key)
        this.handleClick = this.handleClick.bind(this)

    }
    render() {
        return (
            <div className='thumbnail-box' onClick={this.handleClick}>
                <img className='thumb-img' src={this.props.img} alt={'tnail'}/>
                <div className='thumb-content-box'>
                    <p className='thumb-title'>{this.props.title}</p>
                    <p className='thumb-title'>{this.props.street}</p>
                    <p className='thumb-title'>{this.props.city}, {this.props.state}</p>
                    <p className='thumb-title'>{this.props.key}</p>
                </div>

            </div>
        );
    }

    handleClick(){
        console.log("Thumbnail")
        this.props.onclick(this.props.index)
    }

}

export default RegistrationThumbnail;
