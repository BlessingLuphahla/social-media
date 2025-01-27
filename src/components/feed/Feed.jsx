import React from "react";
import "./feed.css";
import Share from "../share/Share";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>
      </div>
    </div>
  );
}

export default Feed;
