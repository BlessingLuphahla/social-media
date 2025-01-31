import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";

function Feed() {
  const posts = [
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Hello world!",
      likes: 5,
      comments: 2,
    },
    {
      id: 3,
      author: "Bob Johnson",
      content: "This is a longer post with more content.",
      likes: 20,
      comments: 10,
    },
    {
      id: 4,
      author: "Alice Brown",
      content: "Another post!",
      likes: 8,
      comments: 3,
    },
    {
      id: 5,
      author: "Mike Davis",
      content: "This is my last post for now.",
      likes: 15,
      comments: 6,
    },
  ];

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>
      </div>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
