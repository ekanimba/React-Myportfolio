import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
 

class MapContainer extends Component {

    
  render() {
    const mapStyles = {
        width: '80%',
        height: '80%',
    };
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCC6E0iWs-mYAYVNNh3mwVW7HGoD8eOQUA'
})(MapContainer);
