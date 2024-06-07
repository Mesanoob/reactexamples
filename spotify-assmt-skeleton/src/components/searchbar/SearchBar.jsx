import React, { useState } from "react";

import "./SearchBar.css";

function SearchBar({ onSearch }) {
  //function that passes the value from the input to onSearch

  const [searchedTerm, setsearchedTerm] = useState("");
  function handleSearchChange(event) {
    onSearch(searchedTerm);
  }

  function handleSearchChange(event) {
    setsearchedTerm(event.target.value);
  }
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleSearchChange}
      />
      <button className="SearchButton" onClick={handleSearchChange}>
        SEARCH INFO.
      </button>
    </div>
  );
}

export default SearchBar;
