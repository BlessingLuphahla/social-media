import React from "react";
import './rightbar.css';

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://via.placeholder.com/40"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://via.placeholder.com/40"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jane Smith</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
