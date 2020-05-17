import React from 'react';
import './ContactPage.css';

export class ContactPage extends React.Component { 
  render() {
    return(
      <div className="logos">
        <ul className="ul-logos">
          <li className="li-logo"><a href="https://aubehub.github.io/"><img src="./logo-github.png" alt="logo github" /></a></li>
          <li className="li-logo"><a href="https://www.linkedin.com/in/alba-l%C3%B3pez-0507a11a8/"><img src="./logo-in.png" alt="logo linkedIn" /></a></li>
          <li className="li-logo"><a href="mailto:albalopsanchez@gmail.com"><img src="./logo-mail.png" alt="logo linkedIn" /></a></li>
			  </ul>
      </div>
    )
  }
}