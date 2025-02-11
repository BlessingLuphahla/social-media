import "./messenger.css";
import Topbar from "../topbar/TopBar";
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import ChatOnline from "../chatOnline/ChatOnline";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Messenger() {
  const { user } = useContext(AuthContext);

  const [conversations, setConversations] = useState(null);
  const [currentChat, setCurrentChat] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchConversations = async () => {
      try {
        const res = await axios.get("/api/conversations/" + user._id, {
          signal: controller.signal,
        });
        setConversations(res.data);
      } catch (err) {
        if (err.name === "AbortError") console.log("Request Was Cancelled");
        else console.log(err);

        console.log(err);
      }
    };

    fetchConversations();

    return () => {
      controller.abort();
    };
  }, [user._id]);

  useEffect(() => {
    if (!currentChat) return;
    const fetchMessages = async () => {
      try {
        const res = await axios.get("/api/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMessages();
  }, [currentChat]);

  console.log(user.profilePic);

  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatMenuInput"
            />
            {conversations?.map((convo, index) => (
              <div
                onClick={() => setCurrentChat(convo)}
                key={convo._id + index}
              >
                <Conversation conversation={convo} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages?.map((message, index) => (
                    <Message
                      key={message._id + index}
                      own={user._id == message.sender}
                      message={message}
                      messageImg={
                        user.profilePic
                          ? PF + "images/person/" + user?.profilePic
                          : PF + "images/person/defaultProfile.jpg"
                      }
                    />
                  ))}
                </div>

                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                  ></textarea>
                  <button className="chatSubmitButton">Send</button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
