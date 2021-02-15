import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';

class Rate extends React.Component{
  constructor(props){
    super(props);
    this.state={
      'date' : '',
      'currencyRate' : {},
      'count':3
    }
    this.currency = ['USD','PLN','RUB','CZK','CAD','HKD','ISK','PHP','DKK','HUF','AUD','RON','SEK','IDR','INR','JPY']
    this.getRate();
    this.changeCount();
  }
  getRate=()=>{
    fetch('https://api.exchangeratesapi.io/latest')
      .then(data=>{
        return data.json();
      })
      .then(data=>{
        console.log(data);
        this.setState({date : data.date});
        let result ={};
        for(let i=0; i<this.currency.length;i++){
          result[this.currency[i]]=data.rates[this.currency[i]];
        }
        this.setState({currencyRate : result})
      });
  }
  changeCount=()=>{
    setInterval(()=>{
      if(this.state.count+1 ==this.currency.length){
        this.setState({count:3})
      }else{
      this.setState({count:(this.state.count+4)})
    };
    },5000)
  }
  render(){
    return (
    <div className="rate">
      <h3 className='date'>Exchange Rate for : {this.state.date} </h3>
      <div className="flex-container">
        {Object.keys(this.state.currencyRate).map((keyName,ind) => {
          if(ind<=this.state.count && ind>this.state.count-4) return(
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}</div>
              <p className="eur">* For 1 EUR</p>
            </div>
          )
        }
          )}
      </div>
      <Calc rate={Object.assign(this.state.currencyRate, { 'EUR': 1 })} />
    </div>
    );
  }
}

export default Rate;
