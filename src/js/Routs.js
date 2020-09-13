
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Succsess from './Success';
import RegistrationList from './RegistrationList'
import Registration from './Regestration'
import MainPage from "./MainPage";

// import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            // <Router>
            <main>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/success" component={Succsess} />
                    <Route path="/RegistrationList" component={RegistrationList} />
                    <Route path="/RegistrationList/Registration" component={Registration} />
                </Switch>
            </main>
            // {/*</Router>*/}
        )
    }
}