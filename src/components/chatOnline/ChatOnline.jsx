import axios from "axios";
import "./chatOnline.css";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function ChatOnline({ onlineUserId }) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const [onlineUser, setOnlineUser] = useState({});

  console.log("onlineUser");
  console.log(onlineUser);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        import.meta.env.VITE_SERVER_URL + "/api/users?userId=" + onlineUserId
      );
      setOnlineUser(res.data);
    };
    fetchUser();
  });

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src={PF + "images/person/" + onlineUser?.profilePic}
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
