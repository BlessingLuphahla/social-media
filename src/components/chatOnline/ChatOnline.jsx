import axios from "axios";
import "./chatOnline.css";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function ChatOnline({ onlineUserId, setCurrentChat }) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const [onlineUser, setOnlineUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        import.meta.env.VITE_SERVER_URL + "/api/users?userId=" + onlineUserId
      );
      setOnlineUser(res.data);
    };
    fetchUser();
  }, [onlineUserId]);

  return (
    <div className="chatOnline">
      <div
        className="chatOnlineFriend"
        onClick={() => setCurrentChat(onlineUser)}
      >
        <div className="chatOnlineImgContainer">
          <img
            src={
              onlineUser?.profilePic
                ? PF + "images/person/" + onlineUser?.profilePic
                : PF + "images/person/defaultProfile.jpg"
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
