import React, { Component } from 'react';
import '../css/MainPage.css';
import { useHistory } from "react-router-dom";

//Images
import River from "../res/RiverWithMist.jpg"
import Lightning from "../res/LightningLake.jpg"
import Mountain from "../res/MountainLake.jpg"
import FogyForset from "../res/FogyForset.jpg"
import SnowCaps from "../res/SnowCaps.jpg"
import CristalClear from "../res/CristalClearLake.jpg"
import RelectedMnt from "../res/ReflectedMnt.jpg"
import GreenForest from "../res/GreenForest.jpg"

//Components
import CycleSelect from "./CycleSelect"
import NaveBar from "./NaveBar";
import Modal from "./Modal";
import {Link} from "react-router-dom";
import Routs from "./Routs";
import RegistrationThumbnail from "./RegistrationThumbnail";

class MainPage extends Component {
    // width = 100;


    constructor(props) {
        super(props);
        console.log('NewMain')
        console.log(this.props.addRegistration)
        let images = [River,GreenForest,Mountain,FogyForset,SnowCaps,CristalClear,RelectedMnt,Lightning];
        this.state = {
            width:0,
            height:0,
            images: images,
            imgIndex: 0,
            currentImg: images[0],
            showModal: false,
            reges: [1,2]
        };

        this.getNextImage = this.getNextImage.bind(this)
        this.getPrevImage = this.getPrevImage.bind(this)
        this.updateWindowDims = this.updateWindowDims.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.navagate = this.navagate.bind(this)

        this.display = this.display.bind(this)

        this.submitForm = this.submitForm.bind(this)
        this.addRegestration = this.addRegestration.bind(this)
        // this.addRegestration(props.location.state.regestration)

    }
    render() {
        return (
            <div>
                <NaveBar navCallBack={this.navagate} homeDisabled={true}/>
                <div className="MainPage" height={window.innerHeight}>
                    <h1 className="text">Welcome To our page</h1>
                    <div className="imgContainer">
                        <img className='img' src={this.state.currentImg} width={window.innerWidth*.6} alt="landscape"></img>
                        <CycleSelect className={"cycle-box"} nextImage={this.getNextImage} prevImage={this.getPrevImage}
                            showModal={this.toggleModal}/>
                    </div>

                </div>
                {this.state.showModal && <Modal closeModal={this.toggleModal} submitForm={this.submitForm} img={this.state.currentImg} />}
            </div>
            // <div className='MainPage'>
            //     <RegistrationThumbnail img={this.state.currentImg} title={"Tristan Knox"} street={'888 tom rd'} state={'NY'} city={'Trumansburg'} />
            // </div>
        );
    }
    getNextImage(){
        let index = this.state.imgIndex + 1
        if(index >= this.state.images.length)
            index = 0
        let image = this.state.images[index]
        this.setState({imgIndex: index, currentImg: image})
    }
    getPrevImage(){
        let index = this.state.imgIndex - 1
        if(index <0)
            index = this.state.images.length-1
        let image = this.state.images[index]
        this.setState({imgIndex: index, currentImg: image})
    }
    componentDidMount() {
        this.updateWindowDims();
        window.addEventListener('resize', this.updateWindowDims)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDims)
    }

    updateWindowDims(){
        this.setState({width: window.innerWidth, height: window.innerHeight})
    }
    toggleModal(){
        let isVisable = !this.state.showModal
        this.setState({showModal:isVisable})
    }

    submitForm(formData){
        // this.storeRegs()
        this.props.history.push({pathname:'/success',state:{formData:formData}})
    }

    saveStateToLocalStorage() {
        console.log("Storing State")
        // for every item in React state
        for (let key in this.state) {
            // save to localStorage
            console.log(key + ": " + this.state[key])
            // localStorage.setItem(key, JSON.stringify(this.state[key]));
            localStorage.setItem(key,this.state[key])
        }
    }

    componentDidMount() {
        // this.hydrateStateWithLocalStorage();
        this.resetState()
        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this),
            // this.resetState.bind(this)
        );
        // this.resetState()
    }

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );


        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
    }

    resetState(){
        console.log("LoadingState")
        try{
            for (let key in localStorage) {
                // save to localStorage

                let value = localStorage.getItem(key)
                if(value === null)
                    value = undefined
                // else
                //     value = JSON.parse(value)
                console.log(key + ': ' + value)
                this.setState({key:value}, this.display())
                // localStorage.setItem(key, JSON.stringify(this.state[key]));
            }
        }catch (e){console.log(e)}

        // console.log(this.state)
    }

    addRegestration(regestration){
        console.log(regestration)
        if(regestration) {
            console.log('Adding Regestration')
            const prevRegs = this.state.reges
            console.log(prevRegs)
            this.setState({
                reges: [...this.state.reges, regestration]
            })

        }
        // console.log(this.state.regestrations)
    }

    display(){
        console.log("Finished adding reg")
        console.log(this.state)
    }

    // storeRegs(){
    //     localStorage.setItem('regs', this.state.regestrations)
    // }

    navagate(destination){
        if(destination === 'home')
            this.props.history.push({pathname:'/'})
        if(destination === 'rList') {
            // this.storeRegs()
            this.props.history.push({pathname: '/RegistrationList', state: {regs: this.state.reges}})
        }
    }
}

export default MainPage;