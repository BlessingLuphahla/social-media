import "./share.css";
import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Share() {
  const { user } = useContext(AuthContext);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  console.log("this is share");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handle submit");

    if (!desc.current.value.trim() && !file) {
      console.log("Post content cannot be empty!");
      return;
    }

    console.log("Uploading post...");

    console.log(file);
    

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName; // Save filename to newPost

      try {
        await axios.post("/api/upload", data); // Upload file first
      } catch (err) {
        console.log("File upload failed:", err);
        return;
      }
    }

    try {
      await axios.post("/api/posts", newPost);
      console.log("Post shared successfully!");
    } catch (err) {
      console.log("Error creating post:", err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePic
                ? PF + "images/person/" + user.profilePic
                : PF + "images/person/defaultProfile.jpg"
            }
            alt=""
          />
          <input
            placeholder={`What's in your mind ${user.username}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form onSubmit={(e) => handleSubmit(e)} className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </label>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => setFile(e.target.files[0])}
            />
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
          <button type="submit" className="shareButton">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
