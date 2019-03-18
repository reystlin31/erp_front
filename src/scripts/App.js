import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../styles/App.css";
import '../styles/bootstrap.css'

import { Button } from 'react-bootstrap';

import AuthForm from './Modules/User/AuthForm'
import { Logout } from "./Actions/UserActions";

class App extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {

    return (
      <div className="App container">
          <AuthForm/>
          {this.props.token}
        <Button onClick={()=>this.props.Logout(this.props.token)}>logout</Button>
      </div>
    );
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  return {
    token: store.User.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      Logout: bindActionCreators(Logout, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))