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
  const [loading, setLoading] = useState(true);  // 🔹 Loading state
  const [error, setError] = useState(null);      // 🔹 Error handling

  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user) return; // 🔹 Ensure user exists before making API calls

      try {
        setLoading(true);
        setError(null);
        let res;


        if (username) {
          res = await axios.get(import.meta.env.VITE_SERVER_URL+`/api/posts/profile/${username}/`);
        } else {
          res = await axios.get(import.meta.env.VITE_SERVER_URL+`/api/posts/timeline/${user._id}`);
        }

        if (res?.data) {
          setPosts(
            res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          );
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [user, username]); // 🔹 Rerun only when user or username changes

  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* 🔹 Show Share component only on user’s own profile */}
        {(!username || username === user?.username ) && <Share />}

        {/* 🔹 Loading & Error Messages */}
        {loading && <p className="loading">Loading posts...</p>}
        {error && <p className="error">{error}</p>}

        {/* 🔹 Different messages for Home & Profile Pages */}
        {!loading && posts.length === 0 && (
          <p className="noPosts">
            {username
              ? "This user hasn't posted anything yet."
              : "Follow more people to see posts!"}
          </p>
        )}

        {/* 🔹 Display posts */}
        {!loading && posts.map((post, index) => {
          const timeAgo = formatDistanceToNow(new Date(post.createdAt), {
            addSuffix: true,
          });

          return (
            <Post
              key={post._id + index}
              date={timeAgo}
              comments={post.comments}
              likes={post.likes}
              content={post.desc}
              img={post.img ? PF + "images/person/" + post.img : null} // 🔹 Handle missing images
              userId={post.userId}
              postId={post._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Feed;
