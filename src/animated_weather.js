import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import "./styles.css";

const defaults = {
  color: 'whitesmoke',
  animate: true
};

const codeMapping = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "PARTLY_CLOUDY_DAY",
  "03n": "PARTLY_CLOUDY_NIGHT",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "RAIN",
  "11n": "RAIN",
  "13d": "SLEET",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG"
};

const AnimatedWeather = (props) => (
  <ReactAnimatedWeather
    icon={codeMapping[props.icon]}
    color={defaults.color}
    size={props.size}
    animate={defaults.animate}
  />
);

export default AnimatedWeather;
