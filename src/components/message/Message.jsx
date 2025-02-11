/* eslint-disable react/prop-types */
import "./message.css";
import { formatDistanceToNow } from "date-fns";

function Message({ own, message, messageImg }) {
  const getTime = () => {
    if (!message) return;
    const time = formatDistanceToNow(new Date(message.createdAt), {
      addSuffix: true,
    });

    return time;
  };

  const timeAgo = getTime();

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageWrapper">
        <div className="messageTop">
          <img className="messageImg" src={messageImg} alt="" />
          <p className="messageText">{message?.text}</p>
        </div>
        <div className="messageBottom">
          {timeAgo
            .replace("about ", "")
            .replace("less than a minute ago", "just now")}
        </div>
      </div>
    </div>
  );
}

export default Message;
