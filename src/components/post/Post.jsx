import {
  MoreVert,
  Comment,
  ThumbUp,
  FavoriteOutlined,
} from "@mui/icons-material";
import "./post.css";
import { useState } from "react";

function Post(post) {
  const [likes, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={post.img} alt="" />
            <span className="postUsername">{post.author}</span>
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
            <span className="postLikeCounter">{likes} likes</span>
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
