import React, {Component} from 'react';
import { Route, IndexRoute, Switch } from 'react-router-dom';
import '../../styles/Modules/Modules.css' 

class Modules extends Component{

  render() {
    return <div className="block col-md-offset-1 col-md-10 Modules">
                <Switch>
                    <Route path="/:portal"  component={ModulesList}/>
                    <Route path="/:portal/Finanse" component={FinanseModule}/>
                </Switch>
           </div>;
  }
}
 function ModulesList()
 {
     return <div>ModulesList</div>;
 }

 function FinanseModule()
 {
     return <div>FinanseModule</div>;
 }
export default Modules;