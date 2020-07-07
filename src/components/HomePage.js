import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export class HomePage extends React.Component{
  render(){
    return (
      <div className="page">
        <div className="wrap-top">
          <img className="foto-port" alt="foto-port" src="img/foto-port.jpg" />
          <div className="h1-div-home">
            <h1>Hello, my name is Alba. I'm a Front-end developer</h1>
          </div>
        </div>
        
        <div className="center-wrap">
          <img className="webdev-img" alt="base project" src="img/webdev.jpg" />
          <div className="btn-div">        
            <Link to="/projects" className="btn-home">Take a look <span> →</span></Link>
          </div>
        </div>
      </div>
    )
  }
}