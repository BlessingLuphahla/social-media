import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topbar/TopBar";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";
import "./profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track mobile screen size

  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/users?username=${username}`,
          {
            signal: controller.signal,
          }
        );
        setUser(res.data);
        setError(null);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError("Failed to fetch user data");
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    return () => {
      controller.abort();
    };
  }, [username]);

  // Handle window resize to detect mobile devices
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEditProfile = () => {
    navigate("/settings");
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // Smooth scroll
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user?.coverPic ||
                  "https://res.cloudinary.com/djopur3de/image/upload/v1739864408/pexels-pixabay-210307_pdzu1i.jpg"
                }
                alt="Cover"
              />
              <img
                className="profileUserImg"
                src={
                  user?.profilePic ||
                  "https://res.cloudinary.com/djopur3de/image/upload/v1739522436/default_dhfy2s.png"
                }
                alt="Profile"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <span className="profileInfoDesc">{user?.desc}</span>
              <button className="editProfileButton" onClick={handleEditProfile}>
                Edit Profile
              </button>
              {/* Scroll to Bottom Button (Visible on Mobile) */}
              {isMobile && (
                <button
                  className="scrollToBottomButton"
                  onClick={scrollToBottom}
                >
                  User Info <span style={{ fontSize: "22px" }}>&darr;</span>
                </button>
              )}
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed username={user?.username} />
            <div
              style={{
                backgroundColor: "#00aeffb9",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "15px",
              }}
            >
              <Rightbar user={user} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
