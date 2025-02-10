/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import "./conversation.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Conversation({ conversation }) {
  const { user } = useContext(AuthContext);

  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const friendId = conversation?.members.find((id) => id !== user._id);

    const fetchFriend = async () => {
      if (!friendId) return;
      try {
        const res = await axios.get("/api/users?userId=" + friendId);
        setFriend(res?.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFriend();
  }, [conversation?.members, user._id]);

  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  return (
    <div className="conversation">
      <img
        src={
          friend.profilePic
            ? PF + "images/person/" + friend?.profilePic
            : PF + "images/person/defaultProfile.jpg"
        }
        className="conversationImg"
      />
      <span className="conversationName">{friend?.username}</span>
    </div>
  );
}

export default Conversation;
