import React from "react";
import GoogleApiWrapper from "../APIs/mapsAPI";
import WeatherCard from "./WeatherCard";
import "./LocationData.css";

const LocationData = props => {
  return (
    <div className="locationData">
      <GoogleApiWrapper
        className="apiWrapper"
        lat={props.lat}
        lon={props.lon}
      />
      <WeatherCard
        lat={props.lat}
        lon={props.lon}
        weatherForecast={props.weatherForecast}
      />
    </div>
  );
};

export default LocationData;
