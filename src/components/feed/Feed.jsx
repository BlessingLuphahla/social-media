import React from "react";
import "./feed.css";
import Share from "../share/Share";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>
        <div className="feedTitle">
          <h4>Home</h4>
        </div>
      </div>
    </div>
  );
}

export default Feed;
