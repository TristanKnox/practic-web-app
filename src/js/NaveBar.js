import React, {Component} from "react";
import '../css/NaveBar.css';
import Regestration from "./Regestration";

class NaveBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            home: props.homeDisabled,
            rList:props.rListDisabled,
        }

    }
    render() {

        return(
            <div className='nav-bar'>
                <button id='home' className='nav-button' disabled={this.state.home} onClick={() => {this.navagate('home')}}>Home</button>
                <button id='regList' className='nav-button' disabled={this.state.rList} onClick={() => {this.navagate('rList')}}>RegerstrationsList</button>
            </div>
        );
    }

    navagate(destanation){
        this.props.navCallBack(destanation)
    }

}

export default NaveBar;