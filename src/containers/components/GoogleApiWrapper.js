import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
export class MapContainer extends Component {
  render() {
    let points = [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
  ]
  let bounds = new this.props.google.maps.LatLngBounds();
  for (var i = 0; i < points.length; i++) {
    bounds.extend(points[i]);
  }
  // console.log('pointers',this.props.alap)
  const marker=[];
  for(let j=0;j<this.props.alap.length;j++){
    let hang = this.props.alap[j]
    let points={
      lat : this.props.alap[j][0],
      lng : this.props.alap[j][1]
    }
    marker.push(  <Marker
      name={'Dolores park'}
      position={points} /> )
  }
  console.log(marker)
    return (
<Map google={this.props.google}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}>
{/* {this.props.alap.map((item)=>{
  return(<Marker
    name={'Dolores park'}
    position={{lat: item.lat, lng: item.lng}} />)
})} */}
{/* <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} /> */}
  {marker}

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCqGflwEF8Q56TReO5_Esn5KUd-gUy0sKk')
})(MapContainer)