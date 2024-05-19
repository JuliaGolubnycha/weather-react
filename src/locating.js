import React from "react";
import axios from "axios";
import week_forecast from "./Days";

export default function Locating({ week_forecast }) {
  function locating() {
    let apiKey = "ed238469f9b5e9d801834270e65449bc";
    let city_name = document.getElementById("search-input").value;
    let apiUrl =
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
      city_name +
      "&limit=" +
      1 +
      "&appid=" +
      apiKey;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data); // Add this line
        let latitude = response.data[0].lat;
        let longitude = response.data[0].lon;
        week_forecast(latitude, longitude); // Use the passed forecast function
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleLocateClick() {
    locating();
  }

  return (
    <div className="locate">
      <button
        type="button"
        className="btn btn-info"
        id="locate"
        onClick={handleLocateClick}
      >
        Find me
      </button>
    </div>
  );
}
