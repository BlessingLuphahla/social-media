import "./share.css";
import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@mui/icons-material";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Cancel } from "@mui/icons-material";

function Share() {
  const { user } = useContext(AuthContext);
 
  const desc = useRef();
  const [file, setFile] = useState(null);

  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file);
      }
    };
  }, [file]);
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!desc.current.value.trim() && !file) {
      console.log("Post content cannot be empty!");
      return;
    }

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;

      try {
        const res = await axios.post(import.meta.env.VITE_SERVER_URL+"/api/upload", data);
        newPost.img = res.data.url;
      } catch (err) {
        console.log("File upload failed:", err);
        return;
      }
    }

    try {
      await axios.post(import.meta.env.VITE_SERVER_URL+"/api/posts", newPost);
      window.location.reload();
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
                ? user.profilePic
                : "https://res.cloudinary.com/djopur3de/image/upload/v1739445344/defaultProfile.jpg"
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
        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <Cancel
              className="shareCancel"
              onClick={() => setFile(null)}
            ></Cancel>
          </div>
        )}
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
