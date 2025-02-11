import "./messenger.css";
import Topbar from "../topbar/TopBar";
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import ChatOnline from "../chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Messenger() {
  const { user } = useContext(AuthContext);

  const [conversations, setConversations] = useState(null);
  const [currentChat, setCurrentChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const scrollRef = useRef();

  useEffect(() => {
    const controller = new AbortController();
    const fetchConversations = async () => {
      try {
        const res = await axios.get("/api/conversations/" + user._id, {
          signal: controller.signal,
        });
        setConversations(res.data);
      } catch (err) {
        if (err.name === "CanceledError") console.log("Request Was Cancelled");
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

  const handleNewMessage = async (e) => {
    e.preventDefault();

    if (!newMessage) return;
    if (!currentChat._id) return;
    if (!user._id) return;

    const message = {
      conversationId: currentChat._id,
      sender: user._id,
      text: newMessage,
    };

    try {
      const res = await axios.post("/api/messages/", message);
      setMessages([...messages, res.data]);
    } catch (err) {
      console.log(err);
    }

    setNewMessage("");
  };

  useEffect(() => {
    if (!scrollRef) return;
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

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
            {currentChat._id ? (
              <>
                <div className="chatBoxTop">
                  {messages?.map((message, index) => (
                    <div ref={scrollRef} key={message._id + index}>
                      <Message
                        own={user._id == message.sender}
                        message={message}
                        messageImg={
                          user.profilePic
                            ? PF + "images/person/" + user?.profilePic
                            : PF + "images/person/defaultProfile.jpg"
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  ></textarea>
                  <button
                    onClick={handleNewMessage}
                    className="chatSubmitButton"
                  >
                    Send
                  </button>
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
