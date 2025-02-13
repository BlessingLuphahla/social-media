import "./topbar.css";
import { Search } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function TopBar() {
  const { user } = useContext(AuthContext);
 

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link className="logo" to="/">
          Redd Media
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search></Search>
          <input
            type="text"
            className="searchInput"
            placeholder="search for friends, post or video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" style={{ textDecoration: "none",color: "white" }}>
            <span className="topbarLink">Home Page</span>
          </Link>
          <Link
            to={`/profile/${user.username}`}
            style={{ textDecoration: "none" , color: "white"}}
          >
            <span className="topbarLink">Timeline</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon></PersonIcon>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Link
              to="/messenger"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ChatIcon></ChatIcon>
            </Link>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon></NotificationsIcon>
            <span className="topbarIconBadge">1</span>
          </div>

          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePic
                  ? user.profilePic
                  : "https://res.cloudinary.com/djopur3de/image/upload/v1739445344/defaultProfile.jpg"
              }
              alt="profile picture"
              className="topbarImg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
