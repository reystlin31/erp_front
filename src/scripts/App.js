import React, {Component} from 'react';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cookies from 'universal-cookie';

import '../styles/App.css'

import UserModule from './UserForms/UserModule';
import AuthForm from './UserForms/AuthForm';
import RegForm from './UserForms/RegForm';
import PasswordRecoveryForm from './UserForms/PasswordRecoveryForm';

import SelectPortal from './PortalForms/SelectPortal';
import CreatePortal from './PortalForms/CreatePortal';
import Portal from './Portal';

export default class App extends Component{

    constructor(props) {
        super(props);

        const cookies = new Cookies();

        this.state = {user: 0,userToken:''};

        if(cookies.get('userToken'))
            this.state.userToken = cookies.get('userToken');

        this.setUserToken = this.setUserToken.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.setUser = this.setUser.bind(this);
    }

    setUserToken(token) {
        const cookies = new Cookies();
        cookies.set('userToken', token);
        this.setState({userToken: token});
    }

    onLogout()
    {
        const cookies = new Cookies();
        cookies.remove('userToken');
        this.setState({user:0,userToken:0});
    }

    setUser(_user)
    {
        this.setState({user:_user});
    }

    render() {

        let content = null;

        if( !this.state.userToken)
        {//Пользователь не авторизован

            content=
                <Switch> \
                    <Route exact path="/" component={(props)=><AuthForm {...props} setUserToken={this.setUserToken}/>}/> \
                    <Route path="/reg/:portal" component={RegForm}/> \
                    <Route path="/reg" component={(props) =><RegForm {...props}/>}/> \
                    <Route path="/passrec" component={(props) =><PasswordRecoveryForm {...props}/>}/> \
                    <Route component={(props)=><AuthForm {...props} setUserToken={this.setUserToken}/>}/> \
                </Switch>;
        }
        else
        {//Пользователь авторизован
            content=
                <Switch> \
                    <Route exact path="/" component={(props)=><SelectPortal user={this.state.user} {...props} />}/>/> \
                    <Route path="/CreatePortal" component={(props) =><CreatePortal user={this.state.user} {...props}/>}/> \
                    <Route path="/:portal" component={(props) =><Portal user={this.state.user} {...props}/>}/> \
                </Switch>;
        }
        return (
            <div className="App container">
                {this.state.userToken?
                    <div className="row">
                        <UserModule onLogout={this.onLogout} setUser={this.setUser} userToken={this.state.userToken}/>
                    </div>:''}
                <Router>
                    {content}
                </Router>
            </div>
        );
    }
}