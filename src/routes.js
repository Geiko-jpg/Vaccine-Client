import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
// IMPORTING JS FILES 
import history from './history';
import HomePage from './home';
import LoginPage from './login';
import RegistrationPage from './registration';

export default class Routes extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/registration" component={RegistrationPage} />
                </Switch>
            </Router>
        );
    }
}