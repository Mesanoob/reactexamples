import React from "react";
import "./Track.css";

function Track({ track, isRemoval }) {
  // TODO: renderAction function (27)
  function renderAction(isRemoval = true) {
    if (isRemoval === true) {
      return <button className="Track-action">-</button>;
    } else {
      return <button className="Track-action">+</button>;
    }
  }
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{/* <!-- track name will go here --> */}Track Information</h3>
        <p>
          {/* <!-- track artist will go here--> */}{" "}
          {/* <!-- track album will go here --> */}
          Artist | Album
        </p>
      </div>
      {renderAction(true)}
    </div>
  );
}

export default Track;
