import React, {Component} from 'react'
import {Link} from "react-router-dom";

import api from '../Api'

export default class SelectPortal extends Component{
    constructor(props) {
        super(props);
        this.state={portals:''};
        console.log(this.props.user);
        api('GET','Portals','getPortalsById',{Id:this.props.user.id})
            .then(response=>{
                if(response.Result!=='None') {
                    console.log(response);
                    this.setState({portals:response.Result});
                }else{
                    console.log(response);
                }
            })
            .catch(error=>{
                console.log(error);
            });
    }
    render() {
        let portals_list ='';
        if(this.state.portals)
            portals_list=this.state.portals.map((portal,key)=><li key={key}><Link to={'/'+portal}>{portal}</Link></li>);
        return (
            <div className="block">
                <h1>Выберите портал</h1>
                <ul>
                    {portals_list?portals_list:'У вас пока нет порталов'}
                </ul>
                <hr />
                <Link to="/CreatePortal"><button className="btn btn-primary btn-block">Создать</button></Link>
                <hr/>
            </div>
        )
    }
}