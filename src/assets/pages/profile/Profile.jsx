import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topbar/TopBar";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";
import "./profile.css";

import profilePic from "../../../assets/images/person/apollo.jpg";

function Profile() {
  return (
    <>
      <TopBar></TopBar>
      <div className="profile">
        <Sidebar></Sidebar>

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={profilePic} alt="" />
              <img
                className="profileUserImg"
                src={profilePic}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Redd Axe</h4>
              <span className="profileInfoDesc">What it is</span>
            </div>
          </div>
        </div>

        <div className="profileRightBottom">
          <div className="profileRightBottomWrapper">
            <h4 className="profileRightBottomTitle">User information</h4>
            <div className="profileRightBottomInfo">
              <div className="profileRightBottomInfoItem">
                <span className="profileRightBottomInfoKey">City:</span>
                <span className="profileRightBottomInfoValue">New York</span>
              </div>
              <div className="profileRightBottomInfoItem">
                <span className="profileRightBottomInfoKey">From:</span>
                <span className="profileRightBottomInfoValue">Madrid</span>
              </div>
              <div className="profileRightBottomInfoItem">
                <span className="profileRightBottomInfoKey">Relationship:</span>
                <span className="profileRightBottomInfoValue">Single</span>
              </div>
            </div>
          </div>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </div>
      </div>
    </>
  );
}

export default Profile;
