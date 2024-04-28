import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Form from "./Form";
import BasicText from "./Basic_text";
import MainWeather from "./Main_weather";
import Days from "./Days";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
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