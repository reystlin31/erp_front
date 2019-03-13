import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import '../../styles/Modules/Modules.css' 
import api from '../Api'
import FixService from './FixService/FixService'

class Modules extends Component{
  constructor(props) {
    super(props);
    this.state = {Modules:0};
    api('GET','Modules','getModulesByPortal',{Portal:this.props.portal})
    .then(response=>{
      if(response.Result!=='None')
        this.setState({Modules:response.Result});
      })
      .catch(error=>{
        console.log(error);
  });     
  }
  render() {
    return <div className="block col-md-offset-1 col-md-10 Modules">
              <div className="btn-back-container" >
                <button className="btn btn-primary btn-large btn-back" onClick={()=>this.props.history.goBack()}>&lt;</button>
              </div>
                <Switch>
                    <Route exact path="/:portal"  component={(props)=><ModulesList portal={this.props.portal} modules={this.state.Modules} {...props}/>}/>
                    <Route path="/:portal/Finanse" component={FinanseModule}/>
                    <Route path="/:portal/FixService" component={FixService}/>
                    <Route path="/:portal/Counterparties" component={СounterpartiesModule}/>
                    <Route path="/:portal/Warehouse" component={WarehouseModule}/>
                </Switch>
           </div>;
  }
}
 function ModulesList(props)
 {
  let Modules_list ='';
  
  if(props.modules!==0)
      Modules_list=props.modules.map((module,key)=>
      <div key={key} className="ModulePrev col-lg-3 col-md-4 col-6">
        <Link to={'/'+props.portal+'/'+module.Module}>{module.Name}</Link>
      </div>);
     return <div className="row">
        {Modules_list?Modules_list:'У вашего портала пока нет модулей'}
      </div>;
 }

 function СounterpartiesModule()
 {
     return <div>СounterpartiesModule</div>;
 }

 function WarehouseModule()
 {
     return <div>WarehouseModule</div>;
 }

 function FinanseModule()
 {
     return <div>FinanseModule</div>;
 }
export default withRouter(Modules);