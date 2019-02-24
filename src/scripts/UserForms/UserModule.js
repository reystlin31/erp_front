import React, {Component} from 'react'

import api from '../Api'

import '../../styles/UserModule.css'

class UserModule extends Component{
    constructor(props) {
        super(props);

        this.state={user:0};
api('GET','Users','IDbyToken',{token:this.props.userToken})
    .then(response=>{
        if(response.ID_User) {
            let id=response.ID_User;
            api('GET','Users','UserInfoById',{Id:response.ID_User})
                .then(response=>{
                    if(response.EMail) {
                        this.setState({user:{
                            id:id,
                            Email:response.EMail,
                            Name:response.Name,
                            Patronymic:response.Patronymic,
                            Surname:response.Surname,
                            Personal_Phone:response.Personal_Phone,
                            Birthday:response.Birthday}});
                            this.props.setUser(this.state.user);
                        }else{
                            console.log(response);
                         }
                })
                .catch(error=>{
                    console.log(error);
                        });

                }else{
                    console.log(response.error);
                }
            })
            .catch(error=>{
                console.log(error);
            });
    }
    render() {
        return (
            <div className="col-md-3 user-module">
                {this.state.user.Name} {this.state.user.Patronymic}
                <button className="btn btn-primary btn-block" onClick={this.props.onLogout}>Выход</button>
                <hr/>
            </div>
        )
    }
}

export default UserModule