import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Row, Col, Button } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import { Logout, Check } from "./Actions/UserActions"

import '../styles/HeaderBlock.css';

class HeaderBlock extends Component{
  constructor(props)
  {
    super(props);
    this.props.Check(this.props.user.token);
  }
  render()
  {
      return(
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="light">
          <Navbar.Brand>{this.props.user.Name}</Navbar.Brand>
          <Button size="sm" onClick={() => this.props.Logout()}>
            Выход
          </Button>
        </Navbar>);
    }
}

const mapStateToProps = store => {
    return {
      user: store.User,
    };
  };

const mapDispatchToProps = dispatch => {
    return {
      Logout: bindActionCreators(Logout, dispatch),
      Check: bindActionCreators(Check, dispatch),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderBlock);
