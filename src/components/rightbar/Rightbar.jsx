/* eslint-disable react/prop-types */
import "./rightbar.css";
import proPic from "../../assets/images/person/6.jpg";
import proPic2 from "../../assets/images/person/3.jpg";
import ad from "../../assets/images/ad.jpg";
import gift from "../../assets/images/gift.jpg";

function Rightbar({user}) {
  
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={gift} alt=""></img>
          <span className="birthdayText">
            <b>Carly Mushkit</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src={ad} alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={proPic} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Rick Sanchez</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={proPic2} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Beth Smith</span>
          </li>
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={proPic} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Rick Sanchez</span>
          </div>

          {user.followings?.map((following) => (
            <div key={following.id} className="rightbarFollowing">
              <img
                src={following.profilePic}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">
                {following.username}
              </span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
