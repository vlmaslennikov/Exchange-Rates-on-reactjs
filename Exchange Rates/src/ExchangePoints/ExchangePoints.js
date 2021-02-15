import React from 'react';
import './ExchangePoints.css';
import Map from '../Map/Map'


class ExchangePoints extends React.Component{
  constructor(){
    super();
    this.state={
      coordinate:{
        local:[48.51237, 32.26869],
        popup:"Kit Group"
      },
    };
      this.addLocation=this.addLocation.bind(this)
  }
  addLocation(coord,e){
    this.setState((state)=>{
      return{coordinate: {'local':coord,'popup':e.target.id}}
    })
  }
  render(){
    return (
      <div className="exchange-place" id='ex-p'>
        <div className="exchange-points">
          <div className='location-block'>
          <ul className='location-place' id="Western Union" onMouseOver={(e)=>this.addLocation([48.50822,32.26728],e)}>
          Western Union
            <li>Kirovograd region, </li>
            <li>Kropyvnytskyi</li>
            <li>Bol'shaya Perspektivnaya str. 18/14</li>
          </ul>
          <ul className='location-place' id="Kredobank" onMouseOver={(e)=>this.addLocation([48.51457,32.27084],e)} >
          Kredobank 
            <li>Kirovograd region, </li>
            <li>Kropyvnytskyi</li>
            <li>Tsentral'nyy ln  1A</li>
          </ul>
         </div>
          <div  className='location-block' >
          <ul className='location-place' id="IPC2B" onMouseOver={(e)=>this.addLocation([48.512285 , 32.27710 ],e)} >
          In Poland Club 2 biuro
            <li>Kirovograd region, </li>
            <li>Kropyvnytskyi</li>
            <li>Egorova str. 40, office 105 </li>
          </ul>
          <ul className='location-place' id="Kit Group" onMouseOver={(e)=>this.addLocation([48.51237, 32.26869],e)} >
          Kit Group
            <li>Kirovograd region, </li>
            <li>Kropyvnytskyi</li>
            <li>Bol'shaya Perspektivnaya str. 32,11 </li>
          </ul>
          </div>
        </div>
        <div className="map">
          <Map location={this.state.coordinate} />
        </div>
      </div>
    );
  }
}

export default ExchangePoints;
