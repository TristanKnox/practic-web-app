import React, { Component } from 'react';
import '../css/App.css';
import Routes from "./Routs";
import GreenForest from "../res/GreenForest.jpg"

class App extends Component {

    constructor(props) {
        super(props);
        let regsList = []


        let sampe = {
            fName: "Sample",
            lName: "Sample",
            address: "Sample",
            city: "Sample",
            state: "Sample",
            zip: "Sample",
            email: "Sample",
            phoneNumber: "Sample",
            paymentMethod: "Sample",
            img: GreenForest
        }
        regsList.push(sampe)



        localStorage.setItem('regsList',JSON.stringify(regsList))
        this.state = {
            regsList: [1],
            editData: undefined
        }
        console.log(this.addRegistration)
        console.log(this.state)
        // this.addRegistration = this.addRegistration.bind(this)

    }
    render() {
        return (
          <div>
              <Routes
                  regsList={this.state.regsList}
                  addRegistration={this.addRegistration}
                  getEditableData={this.getEditableData}
                  pushEditableData={this.pushEditableData}
              />
          </div>
        );
    }

    addRegistration(registration){
        console.log("App Add regs")
        console.log(this.state)
        this.setState({
            regsList: [...this.state.regsList, registration]
        })
    }

    pushEditableData(data){
        this.setState({
            editData: data
        })
    }
    getEditableData(){
        let data = this.state.editData
        this.setState({editData: undefined})
        return data
    }
}

export default App;
