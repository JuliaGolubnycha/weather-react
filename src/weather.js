import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);
  const city_name = props.city;
  const apiKey = "ed238469f9b5e9d801834270e65449bc";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city_name +
    "&appid=" +
    apiKey +
    "&units=metric";

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setTemperature(response.data.main.temp);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }, [url]);

  return (
    <h1>
      {Math.round(temperature)}°C
    </h1>
  );
}
