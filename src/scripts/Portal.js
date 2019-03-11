import React, {Component} from 'react'
import {Link} from "react-router-dom";

import api from './Api'
import TitlePortal from './PortalForms/TitlePortal'
import Modules from './Modules/Modules';
import '../styles/App.css'



class Portal extends Component{

    constructor(props) {
        super(props);
        this.portal = this.props.match.params.portal;
        //добавить проверка доступа к порталу
        this.state={PortalAccess:0};

        api('GET','Portals','isExists',{portal:this.portal})
            .then(response=>{
                if(response.Result==='None') {
                    //console.log(response);
                    this.setState({PortalAccess:0});
                }else{
                    console.log(response);
                    api('GET','Portals','accessUserForPortal',{Portal:this.portal,ID_User:this.props.user.id})
                        .then(response=>{
                            if(response.Result==='None') {
                                //console.log(response);
                                this.setState({PortalAccess:1});
                            }else{
                                //console.log(response);
                                this.setState({PortalAccess:2});
                            }
                        })
                        .catch(error=>{
                            console.log(error);
                        });
                }
            })
            .catch(error=>{
                console.log(error);
            });
    }
    render() {
        let content='';
        if(this.state.PortalAccess===0)
        {
            content=(<div className="Portal">
                <div className="block centerPage">
                    <h1>Выберите портал</h1>
                    <ul>
                        Портала {this.portal} не существует
                    </ul>
                    <hr />
                    <Link to="/CreatePortal"><button className="btn btn-primary btn-block">Создать</button></Link>
                    <hr/>
                </div>
            </div>);
        }
        else if(this.state.PortalAccess===1)
        {
            content=(<div className="Portal">
                <div className="block centerPage">
                    <ul>
                        У вас нет доступа к порталу {this.portal}
                    </ul>
                </div>
            </div>);
        }
        else if(this.state.PortalAccess===2) {
            content=(
                <div className="Portal">
                    <TitlePortal portal={this.portal} user={this.props.user}/>
                    <Modules portal={this.portal} user={this.props.user}/>
                </div>
            );
        }
        return (content);
    }
}

export default Portal