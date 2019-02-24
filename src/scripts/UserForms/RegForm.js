import React, {Component} from 'react'
import {Link} from "react-router-dom";

import api from '../Api';

export default class RegForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={login:0, pass:0, re_pass:0, email:0,
            name:0, patronymic:0, surname:0, personal_phone:0,
            birthday:0, consent:0, success:0, error:0};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.Register = this.Register.bind(this);
        this.portal = this.props.match.params.portal;
        if(this.portal)
        {
            api('GET','Portals','isExists',{portal:this.portal})
                .then(response=>{
                    if(response.Result!=='Ok') {
                        this.setState({error: 'Портал ' + this.portal + ' Не существует'});
                        this.portal=0;
                    }
                })
                .catch(error=>{
                    console.log(error);
                });
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    Register(e)
    {
        e.preventDefault();

        let isValidForm = true;

        $('form input').map(function() {
            isValidForm &= this.validity['valid'] ;
            return 0;
        }) ;

        if(!this.state.consent)
        {
            this.setState({error:''});
            isValidForm=false;
        }

        if(this.state.pass!==this.state.re_pass)
        {
            this.setState({error:'Пароль и подтверждение пароля не совпадают'});
            isValidForm=false;
        }

        if(isValidForm) {
            api('POST','Users','add',{login:this.state.login, pass:this.state.pass,
                    email:this.state.email, name:this.state.name, patronymic:this.state.patronymic,
                    surname:this.state.surname, personal_phone:this.state.personal_phone, birthday:this.state.birthday})
                .then(response=>{
                    if(response.ID) {
                        this.setState({error:0});
                        if(this.portal)
                        {//Если указан портал и он существует, то отправляем запрос на добавление пользователя
                            axios.post(api_address+'Portals/addUserToPortal',{userId:response.ID,portal:this.portal},
                                {headers: {'Content-Type': 'application/json'}})
                                .then(response=>{
                                    if(response.error) {
                                        console.log(response.error);
                                    }
                                })
                                .catch(error=>{
                                    console.log(error);
                                });
                        }
                        this.setState({success: 'Пользователь '+this.state.login+' успешно зарегистрирован'});
                        let redirect_link="/";
                        if(this.portal) {
                            redirect_link += this.portal;
                        }
                        setInterval(()=>this.props.history.push(redirect_link), 3000);

                    }else{
                        this.setState({error: response.error});
                    }
                })
                .catch(error=>{
                    console.log(error);
                });
        }
    }
    render() {
        return (
            <div className="block fluid-container">
                <h1>Регистрация</h1>
                <hr />
                <form onSubmit={this.Register}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"> </i></span>
                                <input  onChange={this.handleInputChange} required type="text" id="login" name="login" className="form-control" placeholder="Ваш логин"/>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-address-card"> </i></span>
                                <input onChange={this.handleInputChange} required type="text" id="name" name="name" className="form-control" placeholder="Ваше имя"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-address-card"> </i></span>
                                <input onChange={this.handleInputChange} required type="text" id="surname" name="surname" className="form-control" placeholder="Ваша фамилия"/>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-address-card"> </i></span>
                                <input onChange={this.handleInputChange} required type="text" id="patronymic" name="patronymic" className="form-control" placeholder="Ваше отчество"/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"> </i></span>
                                <input onChange={this.handleInputChange} required type="password" id="pass" name="pass" className="form-control" placeholder="Ваш пароль"/>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"> </i></span>
                                <input onChange={this.handleInputChange} required type="password" id="re_pass" name="re_pass" className="form-control" placeholder="Повторите пароль"/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
                                <input onChange={this.handleInputChange}  type="email" id="email" required pattern="\S+@[a-z]+.[a-z]+" name="email" className="form-control" placeholder="Ваш E-Mail"/>
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-address-card"> </i></span>
                                <input onChange={this.handleInputChange} required  type="date" min="1950-01-01" max="2010-01-01" id="birthday" name="birthday" className="form-control" placeholder="Дата Вашего рождения"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-phone"> </i></span>
                                <input onChange={this.handleInputChange} required type="tel" id="personal_phone" name="personal_phone" className="form-control" placeholder="Ваш телефон"/>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <input onChange={this.handleInputChange} required type="checkbox" id="consent" name="consent" className="form-control" placeholder="Ваш телефон"/>
                                <span className="input-group-addon"><label htmlFor="consent">Соглашение</label></span>
                            </div>
                        </div>
                    </div>
                    {this.state.error?(<div id='error' className="alert alert-danger" role="alert">{this.state.error}</div>):('')}
                    {this.state.success?(<div className="alert alert-success" role="alert">{this.state.success}</div>):('')}
                    <hr/>
                    <Link to="/" className="btn btn-secondary">Отмена</Link>
                    <button className="btn btn-primary" onClick={this.Register}>Зарегистрироваться</button>
                </form>
            </div>
        )
    }
}