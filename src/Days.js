import React from "react";


export default function Days(props) {
  let now = new Date();
  let temp0=props.temp0;
  let temp1=props.temp1;
  let temp2=props.temp2;
  let temp3=props.temp3;
  let temp4=props.temp4;
  let day_of_the_week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return (
    <div className="container">
      <div className="row" id="forecast-row">
        <div className="col">
          <p className="dotw">
            <span id="dotwsun">{day_of_the_week[(now.getDay()+1) % 7]}</span>
            <br />
            <span className="fortemp" id="temp_first">
              {temp0}{" "}
            </span>
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
            <span id="dotwmon">{day_of_the_week[(now.getDay()+2) % 7]}</span>
            <br />
            <span className="fortemp" id="temp_second">
              {temp1}{" "}
            </span>
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
            <span id="dotwtue">{day_of_the_week[(now.getDay()+3) % 7]}</span>
            <br />
            <span className="fortemp" id="temp_third">
              {temp2}{" "}
            </span>
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
            <span id="dotwwed">{day_of_the_week[(now.getDay()+4) % 7]}</span>
            <br />
            <span className="fortemp" id="temp_forth">
              {temp3}{" "}
            </span>
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
            <span id="dotwthur">{day_of_the_week[(now.getDay()+5) % 7]}</span>
            <br />
            <span className="fortemp" id="temp_fifth">
              {temp4}{" "}
            </span>
            <br />
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather"
              className="icon2"
              id="icon25"
            />
          </p>
        </div>
      </div>
    </div>
  );
}