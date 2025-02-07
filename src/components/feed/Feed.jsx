/* eslint-disable react/prop-types */
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { AuthContext } from "../../context/AuthContext";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  const user = useContext(AuthContext).user;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/api/posts/profile/${username}/`)
        : await axios.get("/api/posts/timeline/" + user._id);
      setPosts(
        res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    };
    fetchPosts();
  }, [user._id, username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {username === user.username && <Share />}
        <div>
          {posts.map((post, index) => {
            const timeAgo = formatDistanceToNow(new Date(post.createdAt), {
              addSuffix: true,
            });

            return (
              <Post
                key={post._id + index + 1}
                date={timeAgo}
                comments={post.comments}
                likes={post.likes}
                content={post.desc}
                img={PF + "images/person/" + post.img}
                userId={post.userId}
                postId={post._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Feed;
