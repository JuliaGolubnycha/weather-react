import React from "react";
import "./styles.css";

export default function MainWeather({mood, humidity, wind}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="charsss" id="clouds">
            Main mood of the day: {mood}
          </p>
          <p className="charsss">
            Humidity: {humidity}%
          </p>
          <p className="charsss">
            Wind: {wind} km/h
          </p>
        </div>
      </div>
    </div>
  );
}
