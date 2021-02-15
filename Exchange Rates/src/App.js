import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import ExchangePoints from './ExchangePoints/ExchangePoints';

class App extends React.Component{
  
  render(){
    return (
      <div>
        <Header/>
            <div className="main-content">
              <Router>
                <Switch>
                    <Route exact path='/' component={Rate}/>
                    <Route exact path='/exchange-points' component={ExchangePoints}/>
                </Switch>
              </Router>
            </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
