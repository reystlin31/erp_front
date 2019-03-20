import React, { Component } from "react"

import { Container, Row, Col, Button } from "react-bootstrap"
import { connect } from "react-redux";

class ContentBlock extends Component{
    render()
    {
        console.log(this.props);
        return(
            <Container style={{paddingTop:'65px'}}>
                <Row>
                    <Col>
                    1111, {this.props.portal}
                    </Col>
                </Row>
            </Container>);
    }
}

const mapStateToProps = (state, ownProps) => ({
    portal: ownProps.match.params.portal
  });

export default connect(mapStateToProps)(ContentBlock);


  
