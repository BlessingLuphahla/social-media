import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  Help,
  Work,
  Event,
  School,
} from "@mui/icons-material";
import Pic from "../../assets/images/person/liu-kang.jpg";
import Pic2 from "../../assets/images/person/apollo.jpg";
import people from "../../components/people";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"></RssFeed>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"></Chat>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcon"></PlayCircleFilled>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"></Group>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"></Bookmark>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon"></Help>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon"></Work>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"></Event>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"></School>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
      </div>
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img src={Pic} alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Pablo Picasso</span>
        </li>
      </ul>

      {people.map((name, index) => (
        <li key={index} className="sidebarFriend">
          <img src={Pic} alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">{name}</span>
        </li>
      ))}

      <div className="sidebarFooter">
        <img src={Pic2} alt="" className="sidebarFooterImg" />
        <div className="sidebarFooterInfo">
          <span className="sidebarFooterName">Redd Axe</span> <br />
          <span className="sidebarFooterTitle">Software Engineer</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
