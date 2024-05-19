import React, { useState } from "react";
import MainWeather from "./Main_weather";
import Days from "./Days";
import axios from "axios";

export default function WeatherTemperature(props){
    let mood=props.mood;
    let humidity=props.humidity;
    let wind=props.wind;
    const [temp0, setTemp0] = useState(null);
    const [temp1, setTemp1] = useState(null);
    const [temp2, setTemp2] = useState(null);
    const [temp3, setTemp3] = useState(null);
    const [temp4, setTemp4] = useState(null);
    const [icon0, setIcon0] = useState(null);
    const [icon1, setIcon1] = useState(null);
    const [icon2, setIcon2] = useState(null);
    const [icon3, setIcon3] = useState(null);
    const [icon4, setIcon4] = useState(null);
    const latitude=props.lat;
    const longitude=props.long;
    const apiKey="dcf3fbe4a530c58005b3594toc5e871f";
    const url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    const [unit, setUnit] = useState("celsius");
    axios.get(url)
    .then(response => {
        setTemp0(Math.round(response.data.daily[0].temperature.day));
        setTemp1(Math.round(response.data.daily[1].temperature.day));
        setTemp2(Math.round(response.data.daily[2].temperature.day));
        setTemp3(Math.round(response.data.daily[3].temperature.day));
        setTemp4(Math.round(response.data.daily[4].temperature.day));
        setIcon0(response.data.daily[0].condition.icon);
        setIcon1(response.data.daily[1].condition.icon);
        setIcon2(response.data.daily[2].condition.icon);
        setIcon3(response.data.daily[3].condition.icon);
        setIcon4(response.data.daily[4].condition.icon);          
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius"){
        return(
            <div>
                <h1 className="temp">{Math.round(props.celsius)}<span className="metrics">°C</span><span className="metrics"> | </span><a className="metrics" href="/" onClick={convertToFahrenheit}>°F</a></h1>
                <MainWeather mood={mood} humidity={humidity} wind={wind}/>
                <Days temp0={temp0} temp1={temp1} temp2={temp2} temp3={temp3} temp4={temp4} icon0={icon0} icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4}/>
            </div>
        );
    } else {
        return (
            <div>
                <h1 className="temp">{Math.round((props.celsius)*(9/5)+32)}<span className="metrics">°F | </span><a className="metrics" href="/" onClick={convertToCelsius}>°C</a></h1>
                <MainWeather mood={mood} humidity={humidity} wind={wind}/>
                <Days temp0={Math.round(temp0*(9/5)+32)} temp1={Math.round(temp1*(9/5)+32)} temp2={Math.round(temp2*(9/5)+32)} temp3={Math.round(temp3*(9/5)+32)} temp4={Math.round(temp4*(9/5)+32)} icon0={icon0} icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4}/>
            </div>
        );
    }

}