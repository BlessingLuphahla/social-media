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
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

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
      <TopBar></TopBar>
      <div className="profile">
        <Sidebar></Sidebar>

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPic
                    ? PF + "images/person/" + user.coverPic
                    : PF + "images/person/defaultProfile.jpg"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePic
                    ? PF + "images/person/" + user.profilePic
                    : PF + "images/person/defaultProfile.jpg"
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
