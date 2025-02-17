import { useState, useContext } from "react";
import "./topbar.css";
import { Search, Menu } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useScreen } from "../../context/ScreenContext";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";

function TopBar() {
  const { user } = useContext(AuthContext);
  const { isMobile } = useScreen();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link className="logo" to="/">
          Redd Media
        </Link>
      </div>

      {/* Hamburger Menu Icon (only visible on mobile) */}
      {isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignContent: "center",
            gap: "20%",
            width: "100%",
          }}
        >
          <div className="hamburgerMenu" onClick={toggleMenu}>
            <Menu htmlColor="white" />
          </div>
          <Link className="logo" to="/">
            Redd Media
          </Link>
        </div>
      )}

      {/* Topbar Center (Search Bar - hidden on mobile) */}
      {!isMobile && (
        <div className="topbarCenter">
          <div className="searchbar">
            <Search />
            <input
              type="text"
              className="searchInput"
              placeholder="search for friends, post or video"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="mobileMenuOpen">
          <Link
            style={{ marginBottom: "5px" }}
            to={`/profile/${user.username}`}
            className="topbarLink"
          >
            <TimelineIcon /> Timeline
          </Link>
          <Link to="/" className="topbarLink">
            <HomeIcon /> Home Page
          </Link>
          <div className="topbarIcons">
            <Link to="/friends" className="topbarIconItem">
              <PersonIcon /> New Friends
              {!isMobile && <span className="topbarIconBadge">1</span>}
            </Link>
            <Link to="/notifications" className="topbarIconItem">
              <NotificationsIcon /> Notifications
              {!isMobile && <span className="topbarIconBadge">1</span>}
            </Link>
            <Link to="/messenger" className="topbarIconItem">
              <ChatIcon /> Messages
              {!isMobile && <span className="topbarIconBadge">2</span>}
            </Link>
          </div>
          <Link to={`/profile/${user.username}`} className="profileSection">
            <img
              src={
                user.profilePic ||
                "https://res.cloudinary.com/djopur3de/image/upload/v1739522436/default_dhfy2s.png"
              }
              alt="dp"
              className="topbarImg"
            />
            <span>{user.username}</span>
          </Link>
        </div>
      )}

      {/* Non-mobile */}
      {!isMobile && (
        <div className="topbarRight">
          <div className="topbarLinks">
            <Link
              to={`/profile/${user.username}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <span className="topbarLink">Timeline</span>
            </Link>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Link
                to="/messenger"
                style={{ textDecoration: "none", color: "white" }}
              >
                <ChatIcon />
              </Link>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePic ||
                  "https://res.cloudinary.com/djopur3de/image/upload/v1739522436/default_dhfy2s.png"
                }
                alt="dp"
                className="topbarImg"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBar;
