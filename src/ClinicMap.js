import React from 'react';
import './ClinicMap.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import clinicLocations from './clinicLocations';

class ClinicMap extends React.Component {
    state = {
      time: 'current'
    };

    handleClickCurrent = () => {
      this.setState({time: 'current'});
    }

    handleClick1973 = () => {
        this.setState({time: '1973'})
    }
    render() {
      let locations = [];
      if(this.state.time === 'current'){
        locations = clinicLocations.currentLocations;
      }
      else if(this.state.time === '1973'){
          locations = clinicLocations.Loc1973;
      }
      return (
        <div style = {containerStyle} >
        <button onClick={this.handleClick1973}>1973</button>
        <button onClick={this.handleClickCurrent}>Current</button>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5.25}
          >
            {
                locations.map((loc) =>
                  <Marker
                    position = {{lat: loc.lat, lng: loc.long}}
                  /> 
                )
            }
          </GoogleMap>
        </LoadScript>
        </div>
      )
   }
}

const center = {
    lat: 32,
    lng: -99.5
};
const containerStyle = {
    
    width: '100%',
    height: '650px'
};

export default ClinicMap;