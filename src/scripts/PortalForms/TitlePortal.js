import React, {Component} from 'react';

import '../../styles/PortalForms/TitlePortal.css' 

class TitlePortal extends Component{

  render() {
    return <div className="block col-md-offset-4 col-md-7 TitlePortal">
            {this.props.portal}
           </div>;
  }
}
 
export default TitlePortal;