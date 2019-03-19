import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Row, Col, Button } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import { Logout } from "./Actions/UserActions"

import '../styles/HeaderBlock.css';

class HeaderBlock extends Component{
    render()
    {
        return(
          <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="light">
            <Navbar.Brand>111</Navbar.Brand>
            <Button size="sm" onClick={() => this.props.Logout(this.props.token)}>
              logout
            </Button>
          </Navbar>);
    }
}

const mapStateToProps = store => {
    return {
      token: store.User.token
    };
  };

const mapDispatchToProps = dispatch => {
    return {
      Logout: bindActionCreators(Logout, dispatch)
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderBlock);
