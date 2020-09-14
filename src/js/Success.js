import React, {Component} from "react";
import '../css/MainPage.css';
import '../css/Modal.css';
import Regestration from "./Regestration";

 class Success extends Component{
     constructor(props) {
         super(props);
         this.state = {
             formData: this.props.location.state.formData
         }
         this.submit = this.submit.bind(this)
     }
     render() {
         console.log("SuccessPage")
         console.log(this.state)
         return(
             <div className='MainPage'>
                 <h1 className='text'>Victory</h1>
                 <p className='text'>You have completed the form</p>
                 <p className='text'>Please review your selections before finalizing your decisions</p>
                 <Regestration data={this.state.formData} isModalView={false} isEditable={true} button={this.button} btnCallback={this.submit}/>
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
         // console.log(regestrationData)
         // let regs = localStorage.getItem('regs')
         // console.log(regs.items)
         // if (regs.items === undefined) {
         //    regs = []
         //     regs[0] = regestrationData
         // }
         // console.log(regs)
         // localStorage.setItem('regs',regs)
         // console.log(localStorage.getItem('regs'))
         this.props.history.push({pathname:'/',state:{regestration:regestrationData}})
     }
 }

 export default Success;