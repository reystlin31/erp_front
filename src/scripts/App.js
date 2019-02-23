import React, {Component} from 'react';

import '../styles/App.css';

import background_img from '../images/grass.jpg';

export default class App extends Component{
    render()
    {
        return(
          <div>
              <h1>asdfdh</h1>
              <img src={background_img} />
          </div>

        );
    };
}