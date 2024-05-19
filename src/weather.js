import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);
  const { city } = props;
  const apiKey = "ed238469f9b5e9d801834270e65449bc";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        console.log("Response data:", response.data); 
        setTemperature(response.data.main.temp);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
  
    fetchWeather();
  }, [city, apiKey]);
  
  

  return (
    <h1>
      {Math.round(temperature)}°C
    </h1>
  );
}
