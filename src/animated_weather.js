import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
 
const defaults = {
  color: 'silver',
  size: 84,
  animate: true
};
 
const App = (props) => (
  <ReactAnimatedWeather
    icon={props.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);
 
export default App;