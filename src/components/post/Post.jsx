import {
  MoreVert,
  Comment,
  ThumbUp,
  FavoriteOutlined,
} from "@mui/icons-material";
import "./post.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { IconButton, Menu, MenuItem } from "@mui/material";

function Post(post) {
  const [likes, setLike] = useState(post.likes.length || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        import.meta.env.VITE_SERVER_URL + "/api/users?userId=" + post.userId
      );
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      await axios.put(
        import.meta.env.VITE_SERVER_URL + "/api/posts/" + post.postId + "/like",
        {
          userId: currentUser._id,
        }
      );
      await axios.put(
        import.meta.env.VITE_SERVER_URL + "/api/users/" + currentUser._id,
        {
          userId: currentUser._id,
          likes: [...currentUser.likes, post.postId], // Create a new array instead of mutating
        }
      );
    } catch (err) {
      console.log(err);
    }

    setLike(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePic
                    ? user.profilePic
                    : "https://res.cloudinary.com/djopur3de/image/upload/v1739522436/default_dhfy2s.png"
                }
                alt=""
              />
            </Link>

            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date.replace("about", "")}</span>
          </div>
          <div className="postTopRight">
            <IconButton onClick={handleMenuOpen}>
              <MoreVert />
            </IconButton>

            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem>Delete Post (doesnt work yet)</MenuItem>
            </Menu>
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
