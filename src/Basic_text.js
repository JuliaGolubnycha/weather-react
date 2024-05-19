import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "./animated_weather";
import WeatherTemperature from "./temp_conv";

export default function BasicText({ city }) {
  const [temperature, setTemperature] = useState(null);
  const [mood, setMood] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (city) {
      const apiKey = "ed238469f9b5e9d801834270e65449bc";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

      axios.get(url)
        .then(response => {
          setTemperature(response.data.main.temp);
          setMood(response.data.weather[0].description);
          setHumidity(response.data.main.humidity);
          setWind(response.data.wind.speed);
          setIcon(response.data.weather[0].icon);
          setLatitude(response.data.coord.lat);
          setLongitude(response.data.coord.lon);
        })
        .catch(error => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [city]);

  return (
    <div className="general_container">
      <div className="h2">
        <h2>
          The weather in <span className="city">{city}</span>
          <br />
          <App icon={icon} size="84" />
        </h2>
        <WeatherTemperature celsius={temperature} mood={mood} humidity={humidity} wind={wind} lat={latitude} long={longitude}/>
      </div>
    </div>
  );
}
