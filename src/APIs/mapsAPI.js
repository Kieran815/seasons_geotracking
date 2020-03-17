import React from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

  render() {
    const style = {
      display: "flex",
      justifyContent: "space-around",
      width: "auto",
      maxWidth: "21em",
      height: "45vh",
      minHeight: "40vh",
      maxHeight: "50vh"
    }
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lon
        }}
        zoom={16}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBUTgyLvwoEUylFXTa0gG9heCDcCqCahEc")
})(MapContainer)
