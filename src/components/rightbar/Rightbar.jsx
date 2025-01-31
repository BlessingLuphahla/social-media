import "./rightbar.css";
import ProfileRightBar from "./ProfileRightBar";
import HomeRightBar from "./HomeRightBar";


function Rightbar({ profile }) {
  

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* {profile ? <ProfileRightBar /> : <HomeRightBar />} */}
        <ProfileRightBar />
        {/* <HomeRightBar /> */}
      </div>
    </div>
  );
}

export default Rightbar;
