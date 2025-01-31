import ad from "../../assets/images/ad.jpg";
import gift from "../../assets/images/gift.jpg";
import proPic from "../../assets/images/person/9.jpg";
import proPic2 from "../../assets/images/person/3.jpg";


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

  export default HomeRightBar