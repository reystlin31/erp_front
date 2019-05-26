import React, { Component } from "react"
import {
    Route,
    Switch,
    withRouter
  } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap"

import MainModule from './Modules/MainModule'
import FS from './Modules/FixService/FS'

class ContentBlock extends Component{
    render()
    {
        return(
            <Container style={{paddingTop:'65px'}}>
                <Row>
                    <Col>
                    <Switch>
                        <Route exact path='/' component={MainModule}/>
                        <Route path='/FS' component={FS}/>
                    </Switch>
                    </Col>
                </Row>
            </Container>);
    }
}

export default ContentBlock;


  
