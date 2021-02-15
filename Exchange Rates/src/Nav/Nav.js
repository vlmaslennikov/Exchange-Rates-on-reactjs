import React from 'react';
import './Nav.css';

class Nav extends React.Component{ 
  render(){
    return (
      <nav className="header-nav">
        <ul>
          <li className="li-left" id="calc"><a href="/">Currency Converter</a></li>
          <li className="li-right" id="map"><a href="/exchange-points">Exchange points</a></li>
       </ul>
     </nav >
    );
  }
}

export default Nav;
