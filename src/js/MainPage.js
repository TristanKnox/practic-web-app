import React, { Component } from 'react';
import '../css/MainPage.css';

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
import Modal from "./Modal";
import {Link} from "react-router-dom";

class MainPage extends Component {
    // width = 100;


    constructor(props) {
        super(props);
        let images = [River,GreenForest,Mountain,FogyForset,SnowCaps,CristalClear,RelectedMnt,Lightning];
        this.state = {width:0, height:0, images: images, imgIndex: 0, currentImg: images[0], showModal: false};
        this.getNextImage = this.getNextImage.bind(this)
        this.getPrevImage = this.getPrevImage.bind(this)
        this.updateWindowDims = this.updateWindowDims.bind(this)
        this.toggleModal = this.toggleModal.bind(this)

        this.submitForm = this.submitForm.bind(this)
        // this.updateWindowDims()
    }
    render() {
        return (
            <div>

                <div className="MainPage" height={window.innerHeight}>
                    <h1 className="text">Welcome To our page</h1>
                    <div className="imgContainer">
                        <img className='img' src={this.state.currentImg} width={window.innerWidth*.6} alt="landscape"></img>
                        <CycleSelect className={"cycle-box"} nextImage={this.getNextImage} prevImage={this.getPrevImage}
                            showModal={this.toggleModal}/>
                    </div>

                    {/*<div className="transparent">*/}
                    {/*    <p>Like what you see?</p>*/}
                    {/*</div>*/}
                    <Link to={'/success'}>Test</Link>
                </div>
                {this.state.showModal && <Modal closeModal={this.toggleModal} submitForm={this.submitForm} img={this.state.currentImg} />}
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

    submitForm(formData){
        console.log(formData)
    }
}

export default MainPage;