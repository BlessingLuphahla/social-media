/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import "./conversation.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Conversation({ conversation }) {
  const { user } = useContext(AuthContext);

  const [friend, setFriend] = useState({});

  useEffect(() => {
    const friendId = conversation?.members.find((id) => id !== user._id);
    const controller = new AbortController();

    const fetchFriend = async () => {
      if (!friendId) return;
      try {
        const res = await axios.get("/api/users?userId=" + friendId, {
          signal: controller.signal,
        });
        setFriend(res?.data);
      } catch (err) {
        if (err.name == "CanceledError") console.log("Request has been Cancelled");
        else console.log(err);
      }
    };
    fetchFriend();

    return () => {
      controller.abort();
    };
  }, [conversation?.members, user._id]);

 

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          friend?.profilePic
            ? friend?.profilePic
            : "https://res.cloudinary.com/djopur3de/image/upload/v1739445344/defaultProfile.jpg"
        }
      />
      <span className="conversationName">{friend?.username}</span>
    </div>
  );
}

export default Conversation;
