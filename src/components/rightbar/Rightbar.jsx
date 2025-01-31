import "./rightbar.css";
import proPic from "../../assets/images/person/6.jpg";
import proPic2 from "../../assets/images/person/3.jpg";
import ad from "../../assets/images/ad.jpg";
import gift from "../../assets/images/gift.jpg";

function Rightbar(prop) {
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
            <span className="rightbarInfoValue">Bulawayo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Magwegwe North</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={proPic} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Rick Sanchez</span>
          </div>
          <div className="rightbarFollowing">
            <img src={proPic2} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Beth Smith</span>
          </div>
          <div className="rightbarFollowing">
            <img src={proPic} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Rick Sanchez</span>
          </div>
          <div className="rightbarFollowing">
            <img src={proPic2} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Beth Smith</span>
          </div>
          <div className="rightbarFollowing">
            <img src={proPic} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Rick Sanchez</span>
          </div>
          <div className="rightbarFollowing">
            <img src={proPic2} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Beth Smith</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {prop.profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
