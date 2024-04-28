import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Form from "./Form";
import BasicText from "./Basic_text";
import MainWeather from "./Main_weather";
import Days from "./Days";
import Footer from "./Footer";

export default function App() {
  const [city, setCity] = useState(""); 

  return (
    <div className="App body">
      <Form onCityChange={setCity} />
      <BasicText city={city} />
      <Header />
      <MainWeather />
      <Days />
      <Footer />
    </div>
  );
}
