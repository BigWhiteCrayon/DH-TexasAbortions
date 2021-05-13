import React from 'react';
import './ClinicMap.css';
import { GoogleMap, LoadScript, Marker, GroundOverlay, Circle } from '@react-google-maps/api';
import clinicLocations from './clinicLocations';

import blankCounties from './texas_counties.png';

class ClinicMap extends React.Component {
    state = {
      time: 'PreHB2',
      overlay: false,
      radius: false,
      radiusDistance: 160934.4
    };

    render() {
      let locations = [];
      let mapOverlay = blankCounties;
      if(this.state.time === 'current'){
        locations = clinicLocations.currentLocations;
      }
      else if(this.state.time === '1973'){
          locations = clinicLocations.Loc1973;
      }
      else if(this.state.time ==='PreHB2'){
        locations = clinicLocations.PreHB2;
      }
      else if(this.state.time === 'PostHB2'){
        locations = clinicLocations.PostHB2;
    }
      return (
        <div className="containerStyle" >
        
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5.5}
          >
           
            {this.state.overlay ? <GroundOverlay bounds = {mapBounds} url = {mapOverlay} /> : null}
            {
                locations.map((loc, index) =>
                <div>
                  <Marker
                    key = {index}
                    position = {{lat: loc.lat, lng: loc.long}}
                    //options = {{icon:mapIcon}}
                  /> 
                  <Circle
                    key = {index}
                    center = {{lat: loc.lat, lng: loc.long}}
                    radius = {this.state.radiusDistance}
                    visible = {this.state.radius}
                    options = {{strokeWeight: 0, fillColor: 'mediumSlateBlue'}}
                  />
                </div>
                )
            }
          </GoogleMap>
        </LoadScript>
        <div>
        <button className="dateButton"
          onClick={this.handleClick1973}
          disabled = {this.state.time === '1973'}>1973</button>
        <button className="dateButton"
          onClick={this.handleClickPreHB2}
          disabled = {this.state.time === 'PreHB2'}>Pre-HB2</button>
        <button className="dateButton"
          onClick={this.handleClickPostHB2}
          disabled = {this.state.time === 'PostHB2'}>Post-HB2</button>
        <button className="dateButton" onClick={this.handleClickCurrent}
           disabled = {this.state.time === 'current'}>Current</button>
        <button className="overlayButton" onClick={this.handleClickOverlay}>Toggle Overlay</button>
        <button className="radiusButton" onClick={this.handleClickRadiusOff}
        disabled = {this.state.radius === false}>Radius Off</button>
        <button className="radiusButton" onClick={this.handleClickRadius100M}
        disabled = {this.state.radius === true && this.state.radiusDistance=== 160934.4}>100 Mile Radius</button>
        <button className="radiusButton" onClick={this.handleClickRadius200M}
        disabled = {this.state.radius === true && this.state.radiusDistance=== 321868.8}>200 Mile Radius</button>
        </div>
        </div>
      )
    }    

   handleClickCurrent = () => {
    this.setState({time: 'current'});
  }

  handleClick1973 = () => {
      this.setState({time: '1973'})
  }

  handleClickPreHB2 = () => {
    this.setState({time: 'PreHB2'})
  }

  handleClickPostHB2 = () => {
    this.setState({time: 'PostHB2'})
  }
  handleClickOverlay = () => {
      this.setState({overlay: !this.state.overlay});
  }
  handleClickRadiusOff = () => {
      this.setState({radius: false});
  }

  handleClickRadius100M = () => {
      this.setState({radius: true, radiusDistance: 160934.4});
  }

  handleClickRadius200M = () => {
    this.setState({radius: true, radiusDistance: 321868.8});
  }
}
const center = {
    lat: 32,
    lng: -99.5
};
const containerStyle = {
  display: 'flex',
    alignSelf: 'center',
    //padding: '12.5%',
    width: '100%',
    height: '650px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
};

/*const hatURL = "https://th.bing.com/th/id/Rd17e3329c13eb3768cdde282a566fe25?rik=aspAs7WjmdYqbQ&riu=http%3a%2f%2fcliparting.com%2fwp-content%2fuploads%2f2016%2f10%2fCowboy-hat-clip-art-image.png&ehk=J8QqvF8oIkowD48fAdeF0%2fVoBbq%2fW0o3nfYQWvLgzVg%3d&risl=&pid=ImgRaw";
const hatBounds = {
  north: 37.5,
  south: 34,
  east: -98,
  west: -105
}*/

const mapBounds = {
  north: 38.98,
  south: 23.35,
  east: -92.85,
  west: -107.4
};

/*const mapIcon = {
  url: 'https://static1.squarespace.com/static/5134ed45e4b066ad5331e95e/t/51638f47e4b0928e3b1fb47a/1365479239493/coral_circle.png',
  scaledSize: {
    height: 25,
    width: 25
  }
};*/
export default ClinicMap;