import React, { Component } from 'react';
import '../css/Modal.css';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formValid:false,
            fName:undefined,
            lName:undefined,
            address: undefined,
            city:undefined,
            state:undefined,
            zip:undefined,
            email:undefined,
            phoneNumber:undefined,
            paymentMethod:undefined,
            img:this.props.img


        }
        this.changeHandler = this.changeHandler.bind(this)
        this.isFormValid = this.isFormValid.bind(this)
    }

    render() {
        return (
            <div className="modal">
                <div className={"modal-box"}>
                    <h1>Great Choice</h1>
                    <img className='img' src={this.props.img} style={{maxHeight:'150px'}} alt="landscape"></img>
                    <p>Please complete the form below to finalize your selection</p>
                    <div className='form'>
                        <form>
                            <div className={'block'}>
                                <label for='fName'>First Name</label>
                                <input id={'fName'} type={'text'} onChange={this.changeHandler}/>

                            </div>
                            <label for={'lName'}>Last Name</label>
                            <input id={'lName'} type={'text'} onChange={this.changeHandler}/>

                            <label for={'address'}>Street address</label>
                            <input id={'address'} type={'text'} onChange={this.changeHandler}/>

                            <label for={'city'}>City</label>
                            <input id={'city'} type={'text'} onChange={this.changeHandler}/>

                            <label for={'state'}>State</label>
                            <input id={'state'} type={'text'} onChange={this.changeHandler}/>

                            <label for={'zip'}>Zipcode</label>
                            <input id={'zip'} type={'text'} onChange={this.changeHandler}/>

                            <label for={'email'}>email</label>
                            <input id={'email'} type={'text'} onChange={this.changeHandler}/>

                            <label for={'phoneNumber'}>Phone Number</label>
                            <input id={'phoneNumber'} type={'text'} onChange={this.changeHandler}/>

                            <label htmlFor={'PaymentMethod:'}>Payment Method</label>
                            <label htmlFor={'payPal'}>PayPal</label>
                            <input id={'payPal'} type={'radio'} name='paymentMethod' value='PayPal' onChange={this.changeHandler}/>
                            <label htmlFor={'creditCard'}>CreditCard</label>
                            <input id={'creditCard'} type={'radio'} name='paymentMethod' value='CreditCard' onChange={this.changeHandler}/>



                        </form>

                    </div>
                    <div className={'modal-button-box'}>
                        <button className={'submit'} disabled={!this.state.formValid}>Submit</button>
                        <button className={'cancel'}>Cancel</button>
                    </div>
                </div>
                <div className='modal-background' onClick={this.props.closeModal}/>
            </div>
        );
    }
    changeHandler = (event) =>{
        let validator = this.getValidator(event.target.id)
        let isValid = validator(event.target.value)
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
                console.log("Setting form valididyt: " +value)
                this.setState({formValid: value})
                break;
            case 'fName':
                console.log("Setting fName: " + value)
                this.setState({fName: value}, this.isFormValid)
                console.log("after set: " + this.state.fName)
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
                console.log(key + " IS undefined: " + this.state[key])
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
            // case 'zip':
            //     return this.validateZip
            // case 'email':
            //     return this.validateEmail
            default:
                return () => {return true}
        }
    }

    validatePhoneNumber(number){
        console.log("PhonNumber")
        if(number.length != 10 && number.length != 12) {
            console.log("BadLenght: " + number.length)
            return false
        }
        for(let i = 0; i < number.length; i++){
            if(isNaN(number[i])) {
                console.log("Not a Number: " +number[i])
                if (!(number.length === 12 && (i === 4 || i === 8)) && number[i] === '-') {
                    console.log("wrong Placing: " + i + " " + number[i])
                    return false
                }
            }
        }
        console.log("Validating " + number)
        return true
    }
    validateEmail(email){
        console.log("Validating " + email)
        return false
    }
    validateZip(zip){
        console.log("Validating " + zip)
        return false
    }
    componentDidMount() {
        console.log("Component has changed")
        console.log(this.state)
    }
}

export default Modal;
