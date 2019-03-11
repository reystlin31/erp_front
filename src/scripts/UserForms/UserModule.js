import React, {Component} from 'react'

import api from '../Api'

import '../../styles/App.css'
import '../../styles/UserModule.css'

class UserModule extends Component{
    constructor(props)
    {
        super(props);

        this.state={user:0};
        api('GET','Users','IDbyToken',{token:this.props.userToken})
            .then(response=>{
                let id=response.ID_User;
                api('GET','Users','UserInfoById',{Id:response.ID_User})
                    .then(response=>{
                            this.setState({user:{
                                id:id,
                                Email:response.EMail,
                                Name:response.Name,
                                Patronymic:response.Patronymic,
                                Surname:response.Surname,
                                Personal_Phone:response.Personal_Phone,
                                Birthday:response.Birthday}});
                                this.props.setUser(this.state.user);
                    })
                    .catch(error=>{
                        console.log(error);
                    });
            })
            .catch(error=>{
                console.log(error);
            });
    }
    render() {
        return (
            <div className="block col-md-3 user-module">
                <div className="header">
                    {this.state.user.Name} {this.state.user.Patronymic}
                </div>
                <div className="body">
                    <button className="btn btn-primary btn-block btn-large" onClick={this.props.onLogout}>Выход</button>
                </div>
            </div>
        )
    }
}

export default UserModule