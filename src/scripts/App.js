import React, { Component } from "react";
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../styles/App.css";
import "../styles/bootstrap.css";

import AuthForm from "./Modules/User/AuthForm";

import HeaderBlock from "./HeaderBlock";
import ContentBlock from "./ContentBlock";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App container">
        {!this.props.token ? (
          <AuthForm />
        ) : (
          <div>
            <HeaderBlock />
            <Route path="/:portal" component={ContentBlock} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    token: store.User.token,
    ownProps
  };
};

export default connect(mapStateToProps)(withRouter(App));


