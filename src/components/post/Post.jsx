import {
  MoreVert,
  Comment,
  ThumbUp,
  FavoriteOutlined,
} from "@mui/icons-material";
import "./post.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Post(post) {
  const [likes, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const likeHandler = () => {
    setLike(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/api/users/" + post.userId);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                user.profilePic
                  ? PF + "images/person/" + user.profilePic
                  : "defaultProfile.jpg"
              }
              alt=""
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.content}</span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp
              onClick={likeHandler}
              htmlColor="blue"
              className="postIcons"
            />
            <FavoriteOutlined
              onClick={likeHandler}
              htmlColor="red"
              className="postIcons"
            />
            <span className="postLikeCounter">{likes || 0} likes</span>
          </div>
          <div className="postBottomRight">
            <Comment className="commentIcon" />
            <span className="postCommentText">{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
