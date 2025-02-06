import "./share.css";
import profilePic from "../../assets/images/person/apollo.jpg";
import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Share() {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={profilePic} alt="" />
          <input
            placeholder="What's in your mind Redd?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOn htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
