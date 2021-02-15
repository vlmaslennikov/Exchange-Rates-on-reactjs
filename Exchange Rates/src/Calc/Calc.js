import React from 'react';
import './Calc.css';

 
class Calc extends React.Component{
  constructor(props){
    super(props);
    this.state={
      result:0,
      money:''
    }
  }
  static getDerivedStateFromProps(props,state){
    return{rate : props.rate}
  }
  calcRate =(e)=>{
    e.preventDefault();
    let elements =e.target.elements;
    console.log(elements['count-currency'].value);
    console.log(elements['type-currency1'].value);
    console.log(elements['type-currency2'].value);
    let countCurrency = elements['count-currency'].value;
    let typeCurrency1 = elements['type-currency1'].value;
    let typeCurrency2 = elements['type-currency2'].value;

    this.setState({result : (countCurrency* (this.state.rate[typeCurrency2]/this.state.rate[typeCurrency1])).toFixed(2)})
    this.setState({money: typeCurrency2})
  }
  render(){
    return (
        <div className="block">
          <form onSubmit={this.calcRate}>
            <div>
              <div>Original currency:</div>
              <select name="type-currency1">
                    {Object.keys(this.props.rate).map(keyName =>(
                      <option key={keyName} value={keyName} >{keyName}</option>
                     ))
                    }
              </select>
            </div>

            <div>
              <div>Quantum:</div>
               <input type="number" defaultValue='100' name='count-currency'/>
            </div>

            <div>
              <div>Required currency:</div>
              <select name="type-currency2">
                  {Object.keys(this.props.rate).map(keyName =>(
                    <option key={keyName} value={keyName} >{keyName}</option>
                   ))
                  }
              </select>
            </div>

            <div>
              <button type="submit"> Convert</button>
            </div>
          </form>
               
          <div className="calc-res">
            <h3>Result :</h3>
            <ul  >
              <li>{this.state.result} {this.state.money} </li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Calc;
