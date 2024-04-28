import React from "react";

export default function Days(prompt) {
  return (
    <div className="container">
      <div className="row" id="forecast-row">
        <div className="col">
          <p className="dotw">
            <span id="dotwsun">Sun</span>
            <br />
            <span className="fortemp" id="temp_first">
              27{" "}
            </span>
            <span className="colgradus">°C</span>
            <br />
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="weather"
              className="icon2"
              id="icon21"
            />
          </p>
        </div>
        <div className="col">
          <p className="dotw">
            <span id="dotwmon">Mon</span>
            <br />
            <span className="fortemp" id="temp_second">
              21{" "}
            </span>
            <span className="colgradus">°C</span>
            <br />
            <img
              src="https://openweathermap.org/img/wn/10n@2x.png"
              alt="weather"
              className="icon2"
              id="icon22"
            />
          </p>
        </div>
        <div className="col">
          <p className="dotw">
            <span id="dotwtue">Tue</span>
            <br />
            <span className="fortemp" id="temp_third">
              26{" "}
            </span>
            <span className="colgradus">°C</span>
            <br />
            <img
              src="https://openweathermap.org/img/wn/03d@2x.png"
              alt="weather"
              className="icon2"
              id="icon23"
            />
          </p>
        </div>
        <div className="col">
          <p className="dotw">
            <span id="dotwwed">Wed</span>
            <br />
            <span className="fortemp" id="temp_forth">
              17{" "}
            </span>
            <span className="colgradus">°C</span>
            <br />
            <img
              src="https://openweathermap.org/img/wn/01n@2x.png"
              alt="weather"
              className="icon2"
              id="icon24"
            />
          </p>
        </div>
        <div className="col">
          <p className="dotw">
            <span id="dotwthur">Thur</span>
            <br />
            <span className="fortemp" id="temp_fifth">
              28{" "}
            </span>
            <span className="colgradus">°C</span>
            <br />
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather"
              className="icon2"
              id="icon25"
            />
          </p>
        </div>

        <div className="locate">
          <button type="button" className="btn btn-info" id="locate">
            Find me
          </button>
        </div>
      </div>
    </div>
  );
}
