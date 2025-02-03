import "./topbar.css";
import { Search } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ProfilePic from "../../assets/images/person/apollo.jpg";
import { Link } from "react-router-dom";

function TopBar() {
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
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon></PersonIcon>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon></ChatIcon>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon></NotificationsIcon>
            <span className="topbarIconBadge">1</span>
          </div>

          <img src={ProfilePic} alt="profile picture" className="topbarImg" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
