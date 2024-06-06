import React from "react";
import "./Track.css";

function Track({ track, isRemoval, onAdd, onRemove }) {
  function addTrack(event) {
    onAdd(track);
    return;
  }

  //function removeTrack in Track.js will use onRemove to pass the track to be removed
  function removeTrack(event) {
    onRemove(track);
  }
  // TODO: renderAction function (27)
  function renderAction(isRemoval = true) {
    if (isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={addTrack}>
          +
        </button>
      );
    }
  }
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>
          {/* <!-- track name will go here --> */}
          {track.name}
        </h3>
        <p>
          {/* <!-- track artist will go here--> */}
          {track.artist}/{track.album}
          {/* <!-- track album will go here --> */}
        </p>
      </div>
      {renderAction(isRemoval)}
    </div>
  );
}

export default Track;
