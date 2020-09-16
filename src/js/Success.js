import React, {Component} from "react";
import '../css/MainPage.css';
import '../css/Modal.css';
import Regestration from "./Regestration";

 class Success extends Component{
     constructor(props) {
         super(props);
         console.log("SUCCESSS*************************************")
         console.log(this.props.addRegistration)
         this.state = {
             formData: this.props.location.state.formData
         }
         this.submit = this.submit.bind(this)
         this.callBack = this.callBack.bind(this)
     }
     render() {
         console.log("SuccessPage")
         console.log(this.state)
         return(
             <div className='MainPage'>
                 <h1 className='text'>Victory</h1>
                 <p className='text'>You have completed the form</p>
                 <p className='text'>Please review your selections before finalizing your decisions</p>
                 <Regestration data={this.state.formData} isModalView={false} isEditable={true} button={this.button} btnCallback={this.callBack}/>
             </div>

         );
     }

     button(){
         return(
           <button onClick={this.test}>Submit</button>
         );
     }
     submit(regestrationData) {
         console.log("Subbmitting")
         let regsList = JSON.parse(localStorage.getItem('regsList'))
         regsList.push(regestrationData)
         localStorage.setItem('regsList',JSON.stringify(regsList))
         this.props.history.push('/')
     }
     callBack(action){
         if(action === 'edit') {
             console.log("edit")
             this.props.history.push({pathname:'/',state:{formData:this.state.formData, editForm:true}})
         }
         if(action === 'submit') {
             console.log('submit')
             let regsList = JSON.parse(localStorage.getItem('regsList'))
             regsList.push(this.state.formData)
             localStorage.setItem('regsList',JSON.stringify(regsList))
             this.props.history.push('/')

         }
     }
 }

 export default Success;