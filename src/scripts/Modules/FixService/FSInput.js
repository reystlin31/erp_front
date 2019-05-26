import React, { Component } from "react"
import { Container, Row, Col, Tab, Form, Nav, Button, Alert } from "react-bootstrap"
//import Select from 'react-select/lib/Creatable'
import Select from '../../components/SelectDictionary';

import api from "../../Api.js";

class FSInput extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            New_or_Repeat: 'New',
            People_or_Company: 'People',
            manufacture: '',
            model:'',
            type:'',
            number:'',
            phone: '',
            name: '',
            company: '',
            comment: '',
            equipment:{},
            isQuickly: false,
            success: '',
            error: '',
            types:{},
            loaded: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.Clear = this.Clear.bind(this);
        this.Submit = this.Submit.bind(this);

      }

      componentWillMount()
      {
        api('GET', 'fs_types_device', 'views')
        .then((result)=>{
            var arr = Object.keys(result).map(function (key) { return {value:result[key], label:result[key]}; });
            console.log(arr);
            this.setState({loaded_data:{types:arr}, loaded:true});
        });

      }
      
    handleChange(e) {
        if(e.target.type=='checkbox')
            this.setState({ [e.target.id]: e.target.checked });
        else
        this.setState({ [e.target.name]: e.target.value });
    }

    Clear()
    {
        this.setState({
            New_or_Repeat: 'New',
            People_or_Company: 'People',
            manufacture: '',
            model:'',
            type:'',
            types:{},
            number:'',
            phone: '',
            name: '',
            company: '',
            comment: '',
            equipment:{},
            isQuickly: false,
            success: '',
            error: '',
        });
    }

    Submit()
    {
        console.log(this.state);
        api('POST', 'fs', 'add-reception', this.state)
        .then((result)=>{
            this.setState({success:result, error:''})
        })
        .catch((error)=>{
            this.setState({success:'', error:error})
        })
    }

    render()
    {
        const { types, type } = this.state;
        const { loaded } = this.state;

        return(
        <Container>
        {loaded? 
            (
                <Form>
                    <Row>
                        <Col>
                            <Tab.Container id="New-or-Repeat"
                            activeKey={this.state.New_or_Repeat}
                            onSelect={New_or_Repeat => this.setState({ New_or_Repeat })}>
                                <Row>
                                    <Col sm={2}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                        <Nav.Link eventKey="New">Новый</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="Repeat">Повтор</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                    <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="New">
                                            <Row>
                                                <Col sm={4}>
                                                    <Form.Group>
                                                        <Form.Label>Производитель</Form.Label>
                                                        <Select
                                                            placeholder="Производитель"
                                                            dictionary="fs_manufacturers" 
                                                            name="manufacture"
                                                            onChange={this.handleChange}/>
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={4}>
                                                    <Form.Group>
                                                        <Form.Label>Модель аппарата</Form.Label>
                                                        <Select
                                                            placeholder="Модель"
                                                            dictionary="fs_models" 
                                                            name="model"
                                                            onChange={this.handleChange}/>
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={4}>
                                                    <Form.Group>
                                                        <Form.Label>Тип</Form.Label>
                                                        <Select
                                                            placeholder="Тип"
                                                            dictionary="fs_types_device" 
                                                            name="type"
                                                            onChange={this.handleChange}/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Repeat">
                                            <Form.Group>
                                                <Form.Label>Номер аппарата</Form.Label>
                                                <Form.Control
                                                type="text"
                                                name="number"
                                                placeholder="Введите номер аппарата"
                                                value={this.state.number}
                                                onChange={this.handleChange}
                                                />
                                            </Form.Group>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    <hr className="col-xs-12"/>
                    <Row>
                        <Col>
                            <Tab.Container id="People-or-Company"
                            activeKey={this.state.People_or_Company}
                            onSelect={People_or_Company => this.setState({ People_or_Company })}>
                                <Row>
                                    <Col sm={2}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                        <Nav.Link eventKey="People">Физ. лицо</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="Company">Юр. лицо</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Group>
                                            <Form.Label>Телефон</Form.Label>
                                            <Form.Control
                                                className="js-phone"
                                                type="phone"
                                                name="phone"
                                                placeholder="Телефон"
                                                value={this.state.phone}
                                                onChange={this.handleChange}
                                                />
                                        </Form.Group>
                                    </Col>
                                    {this.state.People_or_Company=='Company' ?(
                                    <Col sm={5}>
                                        <Form.Group>
                                            <Form.Label>Название организации</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="company"
                                                placeholder="Введите Название организации"
                                                value={this.state.company}
                                                onChange={this.handleChange}
                                                />
                                        </Form.Group>
                                    </Col>):(
                                    <Col sm={5}>
                                        <Form.Group>
                                            <Form.Label>Имя</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Введите Имя"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                                />
                                        </Form.Group>
                                    </Col>    
                                    )}
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    <hr className="col-xs-12"/>
                    <Row>
                        <Col sm={11}>
                            <Form.Group>
                                <Form.Label>Комментарий</Form.Label>
                                    <Form.Control
                                        as="textarea" rows="3"
                                        name="comment"
                                        placeholder="Введите Комментарий"
                                        value={this.state.comment}
                                        onChange={this.handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="col-xs-12"/>
                    <Row>
                        <Col sm={8}>
                                <Form.Label>Комплектация</Form.Label>           
                        <br/>
                            <Form.Control
                            type="text"
                            name="equipment"
                            placeholder="Введите комплектацию"
                            value={this.state.equipment}
                            onChange={this.handleChange}/>
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                    <hr className="col-xs-12"/>
                    <Row>
                        <Col sm={2}>
                            <Form.Check
                                type='checkbox'
                                id='isQuickly'
                                label='Срочный'
                                checked={this.state.isQuickly}
                                onChange={this.handleChange}/>
                        </Col>
                        <Col sm={2}>
                            <Button onClick={this.Submit}>Принять</Button>
                        </Col>
                        <Col sm={6}>
                            {this.state.success && <Alert variant='success'>{this.state.success}</Alert>}
                            {this.state.error && <Alert variant='danger'>{this.state.error}</Alert>}
                        </Col>
                        <Col sm={2}>
                            <Button onClick={this.Clear}>Очистить</Button>
                        </Col>
                    </Row>
                </Form>
        ) : (
            <div>Loading</div>
        )}
        </Container>);
    }
}

export default FSInput;
