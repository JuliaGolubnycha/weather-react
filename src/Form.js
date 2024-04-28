import React, { useState } from "react";

export default function Form({ onCityChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onCityChange(searchTerm.trim()); // Pass the searchTerm to the onCityChange function after trimming whitespace
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
          id="search-input"
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
