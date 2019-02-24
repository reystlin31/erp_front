import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class CreatePortal extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="block">
                <h1>Создание портала</h1>
                <hr />
                <Link to="/"><button className="btn btn-primary btn-block">Назад</button></Link>
                <hr/>
            </div>
        )
    }
}