import React, { Component } from 'react';
import River from "../res/RiverWithMist.jpg"
import Forset from "../res/AutomForest.jpg"
import Mountain from "../res/MountainLake.jpg"

import FogyForset from "../res/FogyForset.jpg"
import SnowCaps from "../res/SnowCaps.jpg"
import CristalClear from "../res/CristalClearLake.jpg"

import CycleSelect from "./CycleSelect"
import '../css/MainPage.css';
import Modal from "./Modal";

class MainPage extends Component {
    // width = 100;


    constructor(props) {
        super(props);
        let images = [River,Forset,Mountain,FogyForset,SnowCaps,CristalClear];
        this.state = {width:0, height:0, images: images, imgIndex: 0, currentImg: images[0], showModal: false};
        this.getNextImage = this.getNextImage.bind(this)
        this.getPrevImage = this.getPrevImage.bind(this)
        this.updateWindowDims = this.updateWindowDims.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        // this.updateWindowDims()
    }
    render() {
        return (
            <div>
                <div className="MainPage" height={window.innerHeight}>
                    <h1 className="text">Welcome To our page</h1>
                    <div className="imgContainer">
                        <img className='img' src={this.state.currentImg} width={window.innerWidth*.6} alt="logo"></img>
                        <CycleSelect className={"cycle-box"} nextImage={this.getNextImage} prevImage={this.getPrevImage}
                            showModal={this.toggleModal}/>
                    </div>

                    {/*<div className="transparent">*/}
                    {/*    <p>Like what you see?</p>*/}
                    {/*</div>*/}

                </div>
                {this.state.showModal && <Modal closeModal={this.toggleModal} />}
            </div>
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
}

export default MainPage;