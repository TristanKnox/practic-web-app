
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Succsess from './Success';
import RegistrationList from './RegistrationList'
import Registration from './Regestration'
import MainPage from "./MainPage";

// import history from "./history";

export default class Routes extends Component {

    constructor(props) {
        console.log("Rounts")
        super(props);
        this.addRegs = this.addRegs.bind(this)
        console.log("Routs")
        console.log(this.props.addRegistration)
    }

    render() {
        let editeData = undefined
        // if(this.props.globalSatate.editData)
        //     editeData = this.props.globalSatate.editData
        return (
            // <Router>
            <main>
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/success' component={Succsess}/>
                    <Route path='/RegistrationList' component={RegistrationList}/>
                    {/*<Route*/}
                    {/*    addRegistration={"this.props.addRegistration"}*/}
                    {/*    path="/" exact*/}
                    {/*    render={(props) => <MainPage {...props} addRegistration={this.addRegs}/>}*/}

                    {/*    // getEditableData={this.props.getEditableData()}*/}
                    {/*    // pushEditableData={this.props.pushEditableData()}*/}
                    {/*    // editData={editeData}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path="/success"*/}
                    {/*    render={(props) => <Succsess {...props} addRegistration={this.addRegs}/>}*/}
                    {/*    // addRegistration={"popycock"}*/}
                    {/*    // getEditableData={this.props.getEditableData()}*/}
                    {/*    // pushEditableData={this.props.pushEditableData()}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path="/RegistrationList"*/}
                    {/*    render={(props) => <RegistrationList {...props}/>}*/}
                    {/*    // addRegistration={this.props.addRegistration}*/}
                    {/*    // getEditableData={this.props.getEditableData}*/}
                    {/*    // pushEditableData={this.props.pushEditableData}*/}
                    {/*    // regsList={this.props.regsList}*/}
                    {/*/>*/}
                    {/*<Route path="/RegistrationList/Registration" component={Registration} />*/}
                </Switch>
            </main>
            // {/*</Router>*/}
        )
    }
    addRegs(registration){
        console.log("Routs add Regs")
        console.log(this.props.addRegestration)
        this.props.addRegistration(registration)
    }
}