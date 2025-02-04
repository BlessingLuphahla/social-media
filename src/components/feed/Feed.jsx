/* eslint-disable react/prop-types */
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/api/posts/profile/${username}/`)
        : await axios.get("/api/posts/timeline/679e4e6193e9f62abca45056");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Feed;
