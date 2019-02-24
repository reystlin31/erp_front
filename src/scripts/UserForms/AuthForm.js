import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import api from '../Api';

export default class AuthForm extends Component
{
    constructor(props) {
        super(props);
        this.state={login:0, pass:0, error:0};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.Login = this.Login.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    Login(e)
    {
        e.preventDefault();
        if(document.getElementById("login").checkValidity()&&document.getElementById("pass").checkValidity())
        {
            api('POST','Users','auth',{login:this.state.login, pass:this.state.pass})
                .then(response=>{
                    if(response.Token) {
                        this.props.setUserToken(response.Token);
                    }else{
                        console.log(response.error);
                        this.setState({error: response.error});
                    }
                })
                .catch(error=>{
                    console.log(error);
                });
        }
    }

    render()
    {
        return (
            <div className="block">
                <h1>Введите свои данные</h1>
                <hr />
                <form onSubmit={this.Login}>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user ti-user"></i></span>
                            <input  onChange={this.handleInputChange} required type="text" id="login" name="login" className="form-control" placeholder="Ваш логин"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock ti-unlock"></i></span>
                            <input onChange={this.handleInputChange} required type="password" id="pass" name="pass" className="form-control" placeholder="Ваш пароль"/>
                        </div>
                    </div>
                    {this.state.error?(<div id='error' className="alert alert-danger">{this.state.error}</div>):('')}
                    <button className="btn btn-primary btn-block" onClick={this.Login}>ВОЙТИ</button>
                    <hr/>
                    <p className="text-center">Еще нет аккаунта? <Link className="txt-brand"
                                                                       to="/reg"><font
                        color='#29aafe'>Регистрируйся</font></Link></p>
                    <p className="text-center">Забыли пароль? <Link className="txt-brand"
                                                                    to="/passrec"><font
                        color='#29aafe'>Восстановить</font></Link></p>
                </form>
            </div>
        )
    }
}