import React from 'react';
import './HomePage.css';

export class HomePage extends React.Component{
  render(){
    return (
      <div className="page">
        <img className="webdev-img" src="./img/webdev.jpg" />
        <div className="btn-div">        
          <a href="/projects" className="btn-home">Take a look <span> →</span></a>
          </div>
      </div>
    )
  }
}