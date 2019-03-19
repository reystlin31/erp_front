import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import "../styles/App.css"
import "../styles/bootstrap.css"

import AuthForm from "./Modules/User/AuthForm"

import HeaderBlock from './HeaderBlock'
import ContentBlock from './ContentBlock'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App container">
        {!this.props.token?
          (<AuthForm />):
          (
            <div>
              <HeaderBlock/>
              <ContentBlock/>
            </div>
          )}
        
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    token: store.User.token
  };
};

export default connect(
  mapStateToProps
)(withRouter(App));
