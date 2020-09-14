import React, {Component} from "react";
import '../css/MainPage.css';
import '../css/Modal.css';
import Regestration from "./Regestration";
import NaveBar from "./NaveBar";
// import {navagate} from './MainPage'

class RegistrationList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            regs: this.props.location.state.regs
        }
        this.navagate = this.navagate.bind(this)
        console.log("RList")
        console.log(this.state.regs)

    }
    render() {

        return(
            <div className='MainPage'>
                <NaveBar navCallBack={this.navagate} rListDisabled={true}/>
                <div>
                    {/*{this.state.regs}*/}
                </div>
            </div>
        );
    }

    buildList(){

    }

    navagate(destination){
        console.log("Navigate: " + destination)
        if(destination === 'home')
            this.props.history.push({pathname:'/', state:{regestration:undefined}})
        // if(destination === 'rList')
        //     this.props.history.push({pathname:'/RegistrationList',state:{regs:this.state.regestrations}})
    }
}

export default RegistrationList;