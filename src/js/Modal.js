import React, { Component } from 'react';
import '../css/Modal.css';

class Modal extends Component {

    constructor(props) {
        super(props);
        // let img = this.props.img
        // if(this.props.formData.img)
        //     img = this.props.formData.img
        this.state = {
            formValid:false,
            fName:this.props.formData.fName,
            lName:this.props.formData.lName,
            address: this.props.formData.address,
            city:this.props.formData.city,
            state:this.props.formData.state,
            zip:this.props.formData.zip,
            email:this.props.formData.email,
            phoneNumber:this.props.formData.phoneNumber,
            paymentMethod:this.props.formData.paymentMethod,
            img:this.props.img
        }

        this.changeHandler = this.changeHandler.bind(this)
        this.isFormValid = this.isFormValid.bind(this)
        this.submit = this.submit.bind(this)
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-box">
                    <h1>Great Choice</h1>
                    <img className='img' src={this.props.img} style={{maxHeight:'150px'}} alt="landscape"></img>
                    <p>Please complete the form below to finalize your selection</p>
                    <div className='form'>
                        <form>
                            <div className='input-box'>
                                <label htmlFor='fName' className='inline' >First Name</label>
                                <input id={'fName'} value={this.props.formData.fName} className='inline' type={'text'} onChange={this.changeHandler}/>
                            </div>
                            <div>
                                <label htmlFor={'lName'} className='inline'>Last Name</label>
                                <input id={'lName'} value={this.props.formData.lName} className='inline' type={'text'} onChange={this.changeHandler}/>
                            </div>

                            <div>
                                <label htmlFor={'address'} className='inline'>Street address</label>
                                <input id={'address'} value={this.props.formData.address} className='inline' type={'text'} onChange={this.changeHandler}/>
                            </div>
                            <div>
                                <label htmlFor={'city'} className='inline'>City</label>
                                <input id={'city'} value={this.props.formData.city} className='inline' type={'text'} onChange={this.changeHandler}/>
                            </div>
                            <div>
                                <label htmlFor={'state'} className='inline'>State</label>
                                <input id={'state'} value={this.props.formData.state} className='inline' type={'text'} onChange={this.changeHandler}/>
                            </div>
                            <div>
                                <label htmlFor={'zip'} className='inline'>Zipcode</label>
                                <input id={'zip'} value={this.props.formData.zip} className='inline' type={'text'} onChange={this.changeHandler}/>
                            </div>
                            <div>
                                <label htmlFor={'email'} className='inline'>email</label>
                                <input id={'email'} value={this.props.formData.email} className='inline' type={'text'} onChange={this.changeHandler}/>
                            </div>
                            <div>
                                <label htmlFor={'phoneNumber'} className='inline'>Phone Number</label>
                                <input id={'phoneNumber'}value={this.props.formData.phoneNumber} className='inline' type={'text'} onChange={this.changeHandler}/>
                            </div>
                            <div>
                                <label htmlFor={'PaymentMethod:'} style={{display: 'block'}} >Payment Method</label>
                                <div className='inline' style={{border:'1px solid'}}>
                                    <div className='radio-box inline'>
                                        <label htmlFor={'payPal'} className='inline'>PayPal</label>
                                        <input id={'payPal'} className={'radio inline'} type={'radio'} name='paymentMethod' value='PayPal' onChange={this.changeHandler}/>
                                    </div>
                                    <div className='radio-box inline'>
                                        <label htmlFor={'creditCard'} className='inline' >CreditCard</label>
                                        <input id={'creditCard'} className={'radio inline'} type={'radio'} name='paymentMethod' value='CreditCard' onChange={this.changeHandler}/>
                                    </div>
                                </div>
                            </div>



                        </form>

                    </div>
                    <div className={'modal-button-box'}>
                        <button className={'submit'} onClick={this.submit} disabled={!this.state.formValid}>Submit</button>
                        <button className={'cancel'} onClick={this.props.closeModal}>Cancel</button>
                    </div>
                </div>
                <div className='modal-background' onClick={this.props.closeModal}/>
            </div>
        );
    }


    changeHandler = (event) =>{
        let validator = this.getValidator(event.target.id)
        let isValid = validator(event.target.value)
        console.log(isValid)
        if(!isValid){
            event.target.style.borderColor = 'Red'
            this.setStateValue(event.target.id, undefined)
            this.setStateValue('formValid', this.isFormValid())
        }
        else{
            event.target.style.borderColor = "black"
            let key = event.target.id
            // let isformVale = this.isFormValid()
            if(key === 'paymentMethod')
                console.log(event.target.value)
            this.setStateValue('formValid', this.isFormValid())
            this.setStateValue(key, event.target.value)
            console.log(this.state.paymentMethod)
        }
    }

    setStateValue(key, value){
        console.log(key + ": " + value)
        switch (key){
            case 'formValid':
                // console.log("Setting form valididyt: " +value)
                this.setState({formValid: value})
                break;
            case 'fName':
                // console.log("Setting fName: " + value)
                this.setState({fName: value}, this.isFormValid)
                // console.log("after set: " + this.state.fName)
                break;
            case 'lName':
                this.setState({lName: value}, this.isFormValid)
                break;
            case 'address':
                this.setState({address: value}, this.isFormValid)
                break;
            case 'city':
                this.setState({city: value}, this.isFormValid)
                break;
            case 'state':
                this.setState({state: value}, this.isFormValid)
                break;
            case 'zip':
                this.setState({zip: value}, this.isFormValid)
                break;
            case 'email':
                this.setState({email: value}, this.isFormValid)
                break;
            case 'phoneNumber':
                this.setState({phoneNumber: value}, this.isFormValid)
                break;
            case 'payPal':
                this.setState({paymentMethod: value}, this.isFormValid)
                break;
            case 'creditCard':
                this.setState({paymentMethod: value}, this.isFormValid)
                break;
        }
    }

    isFormValid() {
        // console.log("isFormValid")
        // console.log(this.state.form)
        for (let key in this.state) {
            if (this.state[key] === undefined){
                // console.log(key + " IS undefined: " + this.state[key])
                this.setState({formValid:false})
                return false
            }
            // console.log("NOt undefined: " + this.state[key])

        }
        this.setState({formValid: true})
        return true
        // return (this.state.fName === undefined ||
        //     this.state.lName === undefined ||
        //     this.state.address === undefined ||
        //     this.state.city === undefined ||
        //     this.state.state === undefined ||
        //     this.state.zip === undefined ||
        //     this.state.email === undefined);

    }

    getValidator(id){
        switch (id){
            case "phoneNumber":
                return this.validatePhoneNumber
            case 'zip':
                return this.validateZip
            case 'email':
                return this.validateEmail
            default:
                return (value) => {
                    console.log("Validating: " +value)
                    return value !== undefined && value !==''}
        }
    }

    validatePhoneNumber(number){
        console.log("PhonNumber")
        if(number.length !== 10 && number.length !== 12) {
            console.log("BadLenght: " + number.length)
            return false
        }
        for(let i = 0; i < number.length; i++){
            if(isNaN(number[i])) {
                console.log("Not a Number: " +number[i])
                if (!(number.length === 12 && (i === 3 || i === 7)) && number[i] === '-') {
                    console.log("wrong Placing: " + i + " " + number[i])
                    return false
                }
            }
        }
        // console.log("Validating " + number)
        return true
    }
    validateEmail(email) {
        let components = email.split('.')
        let domains = ['com', 'edu', 'gov']
        if (components.length !== 2)
            return false
        var pattern = /[a-zA-Z0-9]+[@][a-z]+/g;
        if (!components[0].match(pattern))
            return false
        for (let i = 0; i < domains.length; i++) {
            if (components[1] === domains[i])
                return true
        }
        return false
    }
    validateZip(zip){
        if(zip.length !== 5) {
            return false
        }
        for(let i = 0; i < zip.length; i++){
            if(isNaN(zip[i])) {
                return false
            }
        }
        return true
    }
    componentDidMount() {
        console.log("Did mount")
        let item
        // for (item in this.props.formData){
        //     console.log(item)
        // }

        // this.setState({fName:"Test"})
        console.log("Component has changed")
        console.log(this.state)
    }
    submit(){
        let formData = {}
        for(let key in this.state){
            if(key !== 'formValid')
            formData[key] = this.state[key]
        }
        this.props.submitForm(formData)
    }
}

export default Modal;
