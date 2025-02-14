/* eslint-disable react/prop-types */
import axios from "axios";
import "./chatOnline.css";
import { useEffect, useState } from "react";

function ChatOnline({ onlineUserId, setCurrentChat, currentUser }) {
 
  const [onlineUser, setOnlineUser] = useState({});

  const [conversations, setConversations] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchConversation = async () => {
      try {
        const res = await axios.get("/api/conversations/" + onlineUserId, {
          signal: controller.signal,
        });
        setConversations(res.data);
      } catch (err) {
        if (err.name === "CanceledError") console.log("Request Was Cancelled");
        else console.log(err);
      }
    };

    fetchConversation();

    return () => {
      controller.abort();
    };
  }, [onlineUserId]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        import.meta.env.VITE_SERVER_URL + "/api/users?userId=" + onlineUserId
      );
      setOnlineUser(res.data);
    };
    fetchUser();
  }, [onlineUserId]);

  const handleClick = () => {
    const conversation = conversations.find((conv) =>
      conv.members.includes(currentUser._id)
    );

    setCurrentChat(conversation || conversations);
  };

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend" onClick={handleClick}>
        <div className="chatOnlineImgContainer">
          <img
            src={
              onlineUser?.profilePic
                ? onlineUser?.profilePic
                : "https://res.cloudinary.com/djopur3de/image/upload/v1739522436/default_dhfy2s.png"
            }
            alt=""
            className="chatOnlineImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{onlineUser?.username}</span>
      </div>
    </div>
  );
}

export default ChatOnline;
