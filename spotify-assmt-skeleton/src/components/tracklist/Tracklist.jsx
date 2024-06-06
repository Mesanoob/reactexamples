import React from "react";
import "./Tracklist.css";
import Track from "../track/Track.jsx";

function Tracklist({ searchResults, isRemoval }) {
  return (
    <div className="TrackList">
      {/* <!-- You will add a map method that renders a set of Track components  --> */}
      {/* The ? is a SAFE NAVIGATION OPERATOR to only run the map operation when
      searchResults has data */}
      {searchResults?.map((track) => (
        <Track track={track} key={track.id} isRemoval={isRemoval} />
      ))}
    </div>
  );
}

export default Tracklist;
