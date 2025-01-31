import "./rightbar.css";
import ProfileRightBar from "./ProfileRightBar";
import HomeRightBar from "./HomeRightBar";


function Rightbar( prop ) {
  

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {prop.profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
