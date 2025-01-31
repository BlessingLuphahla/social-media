import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import posts from "../../components/posts";

function Feed() {
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>
      </div>
      <div>
        {posts.map((post) => (
          <Post date={post.date} comments={post.comments} likes={post.likes} author={post.author} content={post.content} img={post.img} key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
