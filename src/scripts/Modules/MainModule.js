import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

class MainModule extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Button><Link to='/FS'>Сервисный центр</Link></Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainModule;
