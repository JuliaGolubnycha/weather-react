import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect }  from "react";
import "./styles.css";
import Header from "./Header";
import Form from "./Form";
import BasicText from "./Basic_text";
import Footer from "./Footer";
import LoadingPage from "./loading";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
export default function App() {
  let [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState(""); 

  function handleSearch() {
    setLoaded(true);
  }

  return (
    <div className="App body">
      <Header />
      <Form onCityChange={setCity} onSearch={handleSearch} />
      {loaded ? (
        <BasicText city={city} />
      ) : (
        <LoadingPage />
      )}
      <Footer />
    </div>
  );
}