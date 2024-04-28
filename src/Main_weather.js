import React from "react";

export default function MainWeather(prompt) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="charsss" id="clouds">
            It's sunny today
          </p>
          <p className="charsss">
            Humidity: <span id="humid">75%</span>
          </p>
          <p className="charsss">
            Wind: <span id="wind">19 km/h</span>
          </p>
        </div>
      </div>
    </div>
  );
}
