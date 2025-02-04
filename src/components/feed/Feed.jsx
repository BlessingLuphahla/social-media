import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import posts from "../../components/posts";
import { useState, useEffect } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "/api/posts/timeline/679e4e6193e9f62abca45056"
      );
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <div>
          {posts.map((post, index) => (
            <Post
              key={post._id + index + 1}
              date={post.createdAt}
              comments={post.comments}
              likes={post.likes.length}
              author={post.userId}
              content={post.desc}
              img={post.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
