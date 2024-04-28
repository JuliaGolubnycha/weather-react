import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BasicText({ city }) {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    if (city) {
      const apiKey = "ed238469f9b5e9d801834270e65449bc";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`; // Ensure the city name is properly encoded

      axios.get(url)
        .then(response => {
          setTemperature(response.data.main.temp);
        })
        .catch(error => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [city]);

  return (
    <div className="h2">
      <h2>
        The weather in <span className="city">{city}</span>:
        <br />
        <br />
        <span>
          {temperature && <h1>{temperature}°C</h1>}
        </span>
      </h2>
    </div>
  );
}
