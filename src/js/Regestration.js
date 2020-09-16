import React, {Component} from "react";
import '../css/MainPage.css';
import '../css/Modal.css';
import '../css/Regestration.css'

class Regestration extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isModalView: this.props.isModalView,
            isEditable: this.props.isEditable,
            fName: this.props.data.fName,
            lName: this.props.data.lName,
            address: this.props.data.address,
            city: this.props.data.city,
            state: this.props.data.state,
            zip: this.props.data.zip,
            email: this.props.data.email,
            phoneNumber: this.props.data.phoneNumber,
            paymentMethod: this.props.data.paymentMethod,
            img: this.props.data.img
        }
        this.submit = this.submit.bind(this)
        this.edit = this.edit.bind(this)
    }
    render() {
        return(
            <div className='modal'>
                <div className='regestration-box key-vlaue-box'>
                    <div style={{displaye: 'block'}}>
                        <div  style={{display:'inline-block', float: 'left'}}>
                            <div className='key-vlaue-box'>
                                <p className='regestriation-text key'>Name: </p>
                                <p className='regestriation-text vale'> {this.state.fName} {this.state.lName}</p>
                            </div>
                            <div className='key-vlaue-box'>
                                <p className='regestriation-text key'>Address: </p>
                                <p className='regestriation-text value'> {this.state.address}</p>
                            </div>
                            <div className='key-vlaue-box'>
                                <p className='regestriation-text key'>City/Stat/zip: </p>
                                <p className='regestriation-text value'> {this.state.city}, {this.state.state} {this.state.zip}</p>
                            </div>
                            <div className='key-vlaue-box'>
                                <p className='regestriation-text key'>Email: </p>
                                <p className='regestriation-text value'>{this.state.email}</p>
                            </div>
                            <div className='key-vlaue-box'>
                                <p className='regestriation-text key'>PhoneNumber: </p>
                                <p className='regestriation-text value'>{this.state.phoneNumber}</p>
                            </div>
                            <div className='key-vlaue-box'>
                                <p className='regestriation-text key'>PaymentMethod: </p>
                                <p className='regestriation-text value'>{this.state.paymentMethod}</p>
                            </div>
                        </div>
                        <div style={{display: 'inline-block', float:'right'}}>
                            <img className='img regestration-img' src={this.state.img} alt='Test' />
                        </div>
                    </div>

                    { this.state.isEditable && <div className='regestration-button-box'>
                        <button onClick={this.submit}>Submit</button>
                        {this.state.isEditable && <button className='button-edit' onClick={this.edit}>Edit</button>}
                    </div>}
                </div>
                {this.state.isModalView && <div className='modal-background' onClick={this.props.btnCallback}/>}

            </div>

        );
    }

    submit(){
        // let formData = {}
        // for(let key in this.state){
        //     if(key !== 'isEditable' && key !== 'isModalView')
        //         formData[key] = this.state[key]
        // }
        // this.props.btnCallback(formData)
        this.props.btnCallback('submit')
    }
    edit(){
        this.props.btnCallback('edit')
    }
}

export default Regestration;