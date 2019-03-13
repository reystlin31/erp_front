import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../../../styles/Modules/FixService/FixService.css' 
import api from '../../Api'
import Reception from './Reception'

export default class FixService extends Component{
  constructor(props) {
    super(props);     
  }
  render() {
    return <div className="FixService">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="take-tab" data-toggle="tab" href="#take" role="tab" aria-controls="take" aria-selected="true">Принять</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profwaitile-tab" data-toggle="tab" href="#wait" role="tab" aria-controls="wait" aria-selected="false">В ожидании</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="fixing-tab" data-toggle="tab" href="#fixing" role="tab" aria-controls="fixing" aria-selected="false">В работе</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="done-tab" data-toggle="tab" href="#done" role="tab" aria-controls="done" aria-selected="false">Готовые</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="issued-tab" data-toggle="tab" href="#issued" role="tab" aria-controls="issued" aria-selected="false">Выданы</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="find-tab" data-toggle="tab" href="#find" role="tab" aria-controls="find" aria-selected="false">Поиск</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade active" id="take" role="tabpanel" aria-labelledby="take-tab"><Reception/></div>
                <div className="tab-pane fade" id="wait" role="tabpanel" aria-labelledby="wait-tab">2</div>
                <div className="tab-pane fade" id="fixing" role="tabpanel" aria-labelledby="fixing-tab">3</div>
                <div className="tab-pane fade" id="done" role="tabpanel" aria-labelledby="done-tab">4</div>
                <div className="tab-pane fade" id="issued" role="tabpanel" aria-labelledby="issued-tab">5</div>
                <div className="tab-pane fade" id="find" role="tabpanel" aria-labelledby="find-tab">6</div>
            </div>
           </div>;
  }
}