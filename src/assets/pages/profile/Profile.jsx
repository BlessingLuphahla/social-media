import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topbar/TopBar";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";
import "./profile.css";

import profilePic from "../../../assets/images/person/apollo.jpg";
import coverPic from "../../../assets/images/person/1.jpg";

function Profile() {
  return (
    <>
      <TopBar></TopBar>
      <div className="profile">
        <Sidebar></Sidebar>

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={coverPic} alt="" />
              <img className="profileUserImg" src={profilePic} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Redd Axe</h4>
              <span className="profileInfoDesc">What it is</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed></Feed>
            <Rightbar></Rightbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
