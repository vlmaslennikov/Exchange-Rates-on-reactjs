import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css';

class Map extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <MapContainer 
        center={this.props.location.local}
        zoom={14}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={this.props.location.local}>
          <Popup>
            {this.props.location.popup}
          </Popup>
        </Marker>
      </MapContainer >
    );
  }
}

export default Map;
