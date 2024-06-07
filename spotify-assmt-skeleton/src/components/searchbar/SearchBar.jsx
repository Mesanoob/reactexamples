import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchedTerm, setSearchedTerm] = useState("");

  function handleInputChange(event) {
    setSearchedTerm(event.target.value);
  }

  function handleSearchClick() {
    onSearch(searchedTerm);
  }

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleInputChange}
        value={searchedTerm}
      />
      <button className="SearchButton" onClick={handleSearchClick}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
