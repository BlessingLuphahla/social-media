import "./rightbar.css";
import ProfileRightBar from "./profilerightbar";
import HomeRightBar from "./homerightbar";


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
