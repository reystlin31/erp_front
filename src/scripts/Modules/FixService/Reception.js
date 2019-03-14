import React, {Component} from 'react';
import '../../../styles/App.css'
import '../../../styles/Modules/FixService/Reception.css' 
import api from '../../Api'

export default class Reception extends Component{
  constructor(props) {
    super(props); 
    this.state={
      Kind_Device:"new",
      Kind_Counterparty:"individual"
    }
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
                        <input type="radio" name="Kind_Device" value="new" defaultChecked
                        onChange={(e)=>this.setState({Kind_Device:e.target.value})}/>Новый</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="Kind_Device" value="return"
                        onChange={(e)=>this.setState({Kind_Device:e.target.value})}/>Повтор</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                  { this.state.Kind_Device === "new" &&
                    <div className="input-group">

                      <div className="input-group-addon">
                        <span className="input-group-text" id="basic-addon1">Аппарат</span> 
                      </div>
                        <input type="text" className="form-control" placeholder="Производитель и модель аппарата" aria-label="Производитель и модель аппарата" aria-describedby="basic-addon1"/>
                    </div>
                  }
                  { this.state.Kind_Device === "return" &&
                    <div className="input-group">

                      <div className="input-group-addon">
                        <span className="input-group-text" id="basic-addon1">Id</span> 
                      </div>
                        <input type="text" className="form-control" placeholder="Id аппарата" aria-label="Id аппарата" aria-describedby="basic-addon1"/>
                    </div>
                  }
                  </div>
                </div>

                <div className="row vertical-align">
                  <div className="col-md-2">
                    <h2>Контрагент</h2>
                  </div>
                  <div className="col-md-2">
                    <div className="radio">
                      <label>
                        <input type="radio" name="Kind_Counterparty" value="individual" defaultChecked
                          onChange={(e)=>this.setState({Kind_Counterparty:e.target.value})}/>Физ лицо</label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="Kind_Counterparty" value="organization"
                        onChange={(e)=>this.setState({Kind_Counterparty:e.target.value})}/>Организация</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                  { this.state.Kind_Counterparty === "individual" &&
                    <div className="input-group">
                      <div className="input-group-addon">
                        <span className="input-group-text" id="basic-addon1">@</span>
                      </div>
                        <input type="text" className="form-control" placeholder="Номер телефона" aria-label="Номер телефона" aria-describedby="basic-addon1"/>
                    </div>
                  }
                  { this.state.Kind_Counterparty === "organization" &&
                    <div className="input-group">
                      <div className="input-group-addon">
                      <select className="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
                      </div>
                      <input type="text" className="form-control" placeholder="Имя пользователя" aria-label="Имя пользователя" aria-describedby="basic-addon1"/>
                    </div>
                  }
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
                <div class="input-group">
  <span class="input-group-addon">Label 2</span>
  <select id="lunch" class="selectpicker form-control" data-live-search="true" title="Please select a lunch ...">
    <option>Hot Dog, Fries and a Soda</option>
    <option>Burger, Shake and a Smile</option>
    <option>Sugar, Spice and all things nice</option>
    <option>Baby Back Ribs</option>
    <option>A really really long option made to illustrate an issue with the live search in an inline form</option>
  </select>
</div>
           </div>;
  }
}

