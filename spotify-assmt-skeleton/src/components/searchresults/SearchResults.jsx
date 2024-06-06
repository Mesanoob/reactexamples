import React from "react";
import Tracklist from "../tracklist/Tracklist";
import "./SearchResults.css";
// Instead of using props, use unwrap operation to obtain ind. params passed in.
function SearchResults({ searchResults }) {
  console.log("Search results given:" + searchResults);
  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      <Tracklist searchResults={searchResults} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
