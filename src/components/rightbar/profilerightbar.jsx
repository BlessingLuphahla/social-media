import proPic from "../../assets/images/person/6.jpg";
import proPic2 from "../../assets/images/person/3.jpg";

const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
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

export default ProfileRightBar