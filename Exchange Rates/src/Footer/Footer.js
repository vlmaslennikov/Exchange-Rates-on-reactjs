import React from 'react';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return (
      <footer>
       
              <div className="footer-block1">
                <h1 className="footer-title">2021 </h1>
                <p>&copy; Maslennikov Vlad</p>
              </div>

                  <ul className="footer-block2">
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Warranty</a></li>
                    <li><a href="#">About service</a></li>
                  </ul>
        
      </footer>
    );
  }
}

export default Footer;
