import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Particles from 'react-particles-js';
import Body from './Components/Body/Body';
import * as serviceWorker from './serviceWorker';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


ReactDOM.render(
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Body />
      </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
