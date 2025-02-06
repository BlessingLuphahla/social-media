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
import Pic2 from "../../assets/images/person/apollo.jpg";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Sidebar() {

  const user = useContext(AuthContext).user;
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  const [followingUsers, setFollowingUsers] = useState([]);
  useEffect(() => {
    const fetchFollowings = async () => {
      if (!user?.followings) return;

      try {
        const usersData = await Promise.all(
          user.followings.map((followingId) =>
            axios
              .get(
                `/api/users?userId=${followingId}`
              )
              .then((res) => res.data)
          )
        );
        setFollowingUsers(usersData);
      } catch (error) {
        console.error("Error fetching followings:", error);
      }
    };

    fetchFollowings();
  }, [user.followings]);

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
        {followingUsers.map((user) => (
          <div key={user._id} className="rightbarFollowing">
            <img
              src={
                user.profilePic
                  ? PF + "images/person/" + user.profilePic
                  : PF + "images/person/defaultProfile.jpg"
              }
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{user.username}</span>
          </div>
        ))}
      </ul>

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
