import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <p className="position-relative top-100 start-50 translate-middle inform">
      Coded by{" "}
      <a
        href="https://github.com/JuliaGolubnycha/weather-react"
        className="bottom"
      >
        Yuliia Holubnycha
      </a>
    </p>
  );
}
