import React from 'react';
import './ClinicMap.css';
import { GoogleMap, LoadScript, Marker, GroundOverlay, Circle } from '@react-google-maps/api';
import clinicLocations from './clinicLocations';

import blankCounties from './texas_counties.png';
import countyIncome2019 from './texas_income_2019.PNG';
import countyIncome2019Legend from './texas_income_2019_legend.PNG';

class ClinicMap extends React.Component {
    state = {
      time: 4,
      overlay: false,
      radius: false,
      radiusDistance: 160934.4
    };

    render() {
      let locations = [];
      let mapOverlay = blankCounties;
      let mapLegend = null;
      let mapBounds = origmapBounds;
      if(this.state.time === 4){
        locations = clinicLocations.currentLocations;
        mapOverlay = countyIncome2019;
        mapBounds = currentMapBouns;
        mapLegend = countyIncome2019Legend;
      }
      else if(this.state.time === 1){
          locations = clinicLocations.Loc1973;
      }
      else if(this.state.time ===2){
        locations = clinicLocations.PreHB2;
        mapOverlay = countyIncome2019;
        mapBounds = currentMapBouns;
        mapLegend = countyIncome2019Legend;
      }
      else if(this.state.time === 3){
        locations = clinicLocations.PostHB2;
        
        mapOverlay = countyIncome2019;
        mapBounds = currentMapBouns;
        mapLegend = countyIncome2019Legend;
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
            {/*<GroundOverlay bounds = {hatBounds} url = {hatURL} />*/}
            {this.state.overlay ?<img src={mapLegend} alt="" className="Legend" /> : null}
            {this.state.overlay ? <GroundOverlay bounds = {mapBounds} url = {mapOverlay} /> : null}
            {
                locations.map((loc, index) =>
                <div key = {index*loc.lat}>
                  <Marker
                    position = {{lat: loc.lat, lng: loc.long}}
                    //options = {{icon:mapIcon}}
                  /> 
                  <Circle
                    center = {{lat: loc.lat, lng: loc.long}}
                    radius = {this.state.radiusDistance}
                    visible = {this.state.radius}
                    options = {{strokeWeight: 0.25, fillColor: 'coral'}}
                  />
                </div>
                )
            }
          </GoogleMap>
        </LoadScript>
        <div style = {{flexDirection: 'row', justifyContent: 'center'}}>
          <button className="dateButton"
          onClick={this.handleClick1973}
          disabled = {this.state.time === 1}>1973</button>
          <button className="dateButton"
          onClick={this.handleClickPreHB2}
          disabled = {this.state.time === 2}>Pre-HB2</button>
          <button className="dateButton"
          onClick={this.handleClickPostHB2}
          disabled = {this.state.time === 3}>Post-HB2</button>
          <button className="dateButton" onClick={this.handleClickCurrent}
           disabled = {this.state.time === 4}>Current</button>
          <button className="radiusButton" onClick={this.handleClickRadiusOff}
          disabled = {this.state.radius === false}>Radius Off</button>
          <button className="radiusButton" onClick={this.handleClickRadius100M}
          disabled = {this.state.radius === true && this.state.radiusDistance=== 160934.4}>100 Mile Radius</button>
          <button className="radiusButton" onClick={this.handleClickRadius200M}
          disabled = {this.state.radius === true && this.state.radiusDistance=== 321868.8}>200 Mile Radius</button>
        <button className="overlayButton" disabled = {this.state.time === 1}
        onClick={this.handleClickOverlay}><div style ={{opacity: this.state.overlay ? '0.25' : '1'}}>Toggle Overlay</div></button>
        </div>
        </div>
      )
    }    

   handleClickCurrent = () => {
    this.setState({time: 4});
  }

  handleClick1973 = () => {
      this.setState({time: 1, overlay: false})
  }

  handleClickPreHB2 = () => {
    this.setState({time: 2})
  }

  handleClickPostHB2 = () => {
    this.setState({time: 3})
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
const currentMapBouns = {
  north: 37.25,
  south: 25.15,
  east: -93,
  west: -107.1
}
const origmapBounds = {
  north: 38.98,
  south: 23.35,
  east: -92.85,
  west: -107.4
};

export default ClinicMap;