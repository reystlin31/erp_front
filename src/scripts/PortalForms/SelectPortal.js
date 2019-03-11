import React, {Component} from 'react'
import {Link} from "react-router-dom";

import api from '../Api'
import '../../styles/App.css'

export default class SelectPortal extends Component{
    constructor(props) {
        super(props);
        this.state={portals:'', loading:true };

    }

    componentWillMount() {
        api('GET','Portals','getPortalsById',{Id:this.props.user.id})
            .then(response=>{
                if(response.Result!=='None')
                    this.setState({portals:response.Result});
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
            <div className="block centerPage">
                <div className="header">
                    <h1>Выберите портал</h1>
                </div>
                <div className="body">
                    <ul>
                        {portals_list?portals_list:'У вас пока нет порталов'}
                    </ul>
                </div>
                <div className="footer">
                    <Link to="/CreatePortal"><button className="btn btn-primary btn-block">Создать</button></Link>
                </div>
            </div>
        )
    }
}