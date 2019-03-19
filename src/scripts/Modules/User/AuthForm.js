import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap";

import { Login } from "../../Actions/UserActions";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      pass: "",
      saved: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    switch (e.target.name) {
      case "login":
        this.setState({ login: e.target.value });
        break;

      case "pass":
        this.setState({ pass: e.target.value });
        break;

      case "saved":
        this.setState({ saved: e.target.checked });
        break;
    }
  }

  render() {
    const { error, Action } = this.props;

    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control
                  type="text"
                  name="login"
                  placeholder="Введите логин"
                  value={this.state.login}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  name="pass"
                  placeholder="Введите пароль"
                  value={this.state.pass}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check
                  type="checkbox"
                  name="saved"
                  label="Запомнить меня"
                  defaultChecked={this.state.saved}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  this.props.Login(this.state.login, this.state.pass, this.state.saved);
                }}
              >
                Войти
              </Button>
              <Button variant="dark" type="submit">
                Регистрация
              </Button>
              <Button variant="dark" type="submit">
                Восстновить пароль
              </Button>
            </Form>
          </Col>
        </Row>
        {error && (
          <Row>
            <Col>
              <Alert variant="danger">{error}</Alert>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return {
    error: store.User.error
  };
};
function mapDispatchToProps(dispatch){
  return {
    Login: bindActionCreators(Login, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
