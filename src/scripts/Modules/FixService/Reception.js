import React, {Component} from 'react';
import '../../../styles/App.css'
import '../../../styles/Modules/FixService/Reception.css' 
import api from '../../Api'

export default class Reception extends Component{
  constructor(props) {
    super(props); 
    this.state={
      Kind_Device:"new"
    };
    
  }

  Set_Kind_Device(Kind)
  {
    console.log(Kind);
    this.setState({Kind_Device:Kind});
  }
  render() {
    return <div className="container Reception">

                <div className="row vertical-align">
                  <div className="col-md-2">
                    <h2>Аппарат</h2>
                  </div>
                  <div className="col-md-2">
                    <div className="radio">
                      <label>
                        <input type="radio" name="Kind_Device" value="new"
                        onChange={(e)=>this.setState({Kind_Device:e.target.value})}/>Новый</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="Kind_Device" value="return"
                        onChange={(e)=>this.setState({Kind_Device:e.target.value})}/>Повтор</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <div className="input-group-addon">
                        <span className="input-group-text" id="basic-addon1">@</span>
                      </div>
                        <input type="text" className="form-control" placeholder="Имя пользователя" aria-label="Имя пользователя" aria-describedby="basic-addon1"/>
                    </div>
                  </div>
                </div>

                <div className="row vertical-align">
                  <div className="col-md-2">
                    <h2>Контрагент</h2>
                  </div>
                  <div className="col-md-2">
                    <div className="radio">
                      <label><input type="radio" name="optradio" checked/>Физ лицо</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="optradio"/>Юр лицо</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <div className="input-group-addon">
                        <span className="input-group-text" id="basic-addon1">@</span>
                      </div>
                        <input type="text" className="form-control" placeholder="Имя пользователя" aria-label="Имя пользователя" aria-describedby="basic-addon1"/>
                    </div>
                  </div>
                </div>

                <div className="row vertical-align">
                <div className="col-md-2">
                    <h2>Комментарий</h2>
                  </div>
                  <div className="col-md-8">
                    <div class="form-group">
                      <textarea class="form-control" id="exampleFormControlTextarea3" rows="8"></textarea>
                    </div>
                  </div>
                </div>

                <div className="row vertical-align">
                  <div className="col-md-2">
                    <h2>Источник</h2>
                  </div>
                  <div className="col-md-8">
                    <div className="input-group">
                      <div className="input-group-addon">
                        <span className="input-group-text" id="basic-addon1">@</span>
                      </div>
                        <input type="text" className="form-control" placeholder="Имя пользователя" aria-label="Имя пользователя" aria-describedby="basic-addon1"/>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="input-group">
                      <button type="button" className="btn btn-primary">Принять</button>
                    </div>
                  </div>
                </div>
           </div>;
  }
}

