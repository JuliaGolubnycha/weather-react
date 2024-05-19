import React, { useState } from "react";
import "./styles.css";

export default function Form({ onCityChange, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onCityChange(searchTerm.trim()); 
    onSearch();
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container" id="search-form">
        <input
          type="text"
          placeholder="Enter your city's name"
          className="form-control"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-info" id="search-button">
          Search
        </button>
      </div>
    </form>
  );
}
