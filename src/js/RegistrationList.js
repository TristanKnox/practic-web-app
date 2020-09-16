import React, {Component} from "react";
import '../css/MainPage.css';
import '../css/Modal.css';
import Regestration from "./Regestration";
import NaveBar from "./NaveBar";
// import {navagate} from './MainPage'
import RegistrationThumbnail from './RegistrationThumbnail'

class RegistrationList extends Component{
    constructor(props) {
        super(props);
        let list = JSON.parse(localStorage.getItem('regsList'))


        console.log(list)
        this.state = {
            regs: list,
            regsExist: (list.length > 0),
            showRegistration: false,
            currentRegId:undefined
        }
        this.navagate = this.navagate.bind(this)
        this.showReg = this.showReg.bind(this)
        this.hideReg = this.hideReg.bind(this)

    }
    render() {
        let i = 0
        const listItems = this.state.regs.map(
            (d) => <RegistrationThumbnail
                img={d.img}
                title={d.fName + ' ' + d.lName}
                street={d.address}
                city={d.city}
                state={d.state}
                onclick={this.showReg}
                index={i++}
            />)
        return(
            <div className='MainPage'>
                <NaveBar navCallBack={this.navagate} rListDisabled={true}/>
                <div>
                    <div className='rList'>
                        {this.state.regsExist && listItems}
                        {!this.state.regsExist && <p>No regestrations made yet</p>}
                    </div>
                    {
                        this.state.showRegistration &&
                        <Regestration data={this.state.regs[this.state.currentRegId]} isModalView={true} button={this.button} btnCallback={this.hideReg}/>

                    }

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
    showReg(index){
        console.log("RegistrationList")
        console.log(index)
        this.setState({showRegistration: true, currentRegId: index})
    }
    hideReg(){
        this.setState({showRegistration: false, currentRegId:undefined})
    }
}

export default RegistrationList;