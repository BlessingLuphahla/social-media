import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topbar/TopBar";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";
import "./profile.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState({});

  const username = useParams().username;

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_SERVER_URL + "/api/users?username=" + username,
          {
            signal: controller.signal,
          }
        );

        setUser(res.data);
      } catch (err) {
        if (err.name === "CanceledError") console.log("Request was cancelled");
        else console.log(err);
      }
    };
    fetchUser();

    return () => {
      controller.abort();
    };
  }, [username]);

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
                  user.coverPic
                    ? user.coverPic
                    : "https://res.cloudinary.com/djopur3de/image/upload/v1739864408/pexels-pixabay-210307_pdzu1i.jpg"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePic
                    ? user.profilePic
                    : "https://res.cloudinary.com/djopur3de/image/upload/v1739522436/default_dhfy2s.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username} </h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed username={user.username} />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
