import React from 'react';
import './ContactPage.css';

export class ContactPage extends React.Component { 
  render() {
    return(
      <div className="logos">
        <ul className="ul-logos">
          <li className="li-logo"><a href="mailto:albalopsanchez@gmail.com"><img src="./logo-mail.png" alt="logo mail" /></a></li>
          <li className="li-logo"><a href="https://github.com/aubehub"><img src="./logo-github.png" alt="logo github" /></a></li>
          <li className="li-logo"><a href="https://www.linkedin.com/in/alópez"><img src="./logo-in.png" alt="logo linkedIn" /></a></li>
          <li className="li-logo"><a href="./AlbaLopez_CV2020.pdf"><img src="./logo-cv2.png" alt="resume" /></a></li>
			  </ul>
      </div>
    )
  }
}