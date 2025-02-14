import "./messenger.css";
import Topbar from "../topbar/TopBar";
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import ChatOnline from "../chatOnline/ChatOnline";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { io } from "socket.io-client";

function Messenger() {
  const { user } = useContext(AuthContext);

  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();

  const scrollRef = useRef();

  useEffect(() => {
    if (!user?._id) return;
    socket.current = io(import.meta.env.VITE_SERVER_URL, {
      transports: ["websocket", "polling"],
    });

    socket.current.emit("sendUser", user?._id);

    socket.current.on("getUsers", (users) => {
      if (Array.isArray(users)) {
        users = users.filter((user_) => user_.userId !== user?._id);
        setOnlineUsers(users);
      } else {
        console.log("Expected an array of users, but received:", users);
      }
    });

    socket.current.on("getMessage", (message) => {
      setArrivalMessage({
        sender: message.senderId,
        text: message.text,
        createdAt: Date.now(),
      });
    });

    return () => {
      // Cleanup on component unmount
      socket.current.disconnect();
    };
  }, [user?._id]);

  useEffect(() => {
    if (
      arrivalMessage &&
      currentChat?.members?.includes(arrivalMessage.sender)
    ) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchConversations = async () => {
      try {
        const res = await axios.get("/api/conversations/" + user?._id, {
          signal: controller.signal,
        });
        setConversations(res.data);
      } catch (err) {
        if (err.name === "CanceledError") console.log("Request Was Cancelled");
        else console.log(err);
      }
    };

    fetchConversations();

    return () => {
      controller.abort();
    };
  }, [user?._id]);

  const fetchMessages = useCallback(async () => {
    if (!currentChat?._id) return;
    try {
      const res = await axios.get("/api/messages/" + currentChat?._id);
      console.log("Fetched messages:", res.data);
      if (Array.isArray(res.data)) {
        setMessages(res.data);
      } else {
        console.log("Unexpected response for messages:", res.data);
      }
    } catch (err) {
      console.log("Error fetching messages:", err);
    }
  }, [currentChat?._id]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleNewMessage = async (e) => {
    e.preventDefault();

    if (!newMessage || !currentChat?._id || !user?._id) return;

    const message = {
      conversationId: currentChat?._id,
      sender: user?._id,
      text: newMessage,
      createdAt: Date.now(), // Add timestamp immediately
    };

    // 🔹 Update UI immediately
    setMessages((prevMessages) => [...prevMessages, message]);

    const receiverId = currentChat?.members.find(
      (member) => member !== user?._id
    );

    socket.current.emit("sendMessage", {
      senderId: user?._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/api/messages/", message);
      setMessages((prevMessages) =>
        prevMessages?.map((m) =>
          m.createdAt === message.createdAt ? res.data : m
        )
      );
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
            {Array.isArray(conversations) &&
              conversations.map((convo, index) => (
                <div
                  onClick={() => setCurrentChat(convo)}
                  key={convo?._id + index}
                >
                  <Conversation conversation={convo} />
                </div>
              ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat?._id ? (
              <>
                <div className="chatBoxTop">
                  {messages?.map((message, index) => (
                    <div ref={scrollRef} key={message?._id + index}>
                      <Message
                        own={user?._id == message.sender}
                        message={message}
                        messageImg={
                          user?.profilePic
                            ? user?.profilePic
                            : "https://res.cloudinary.com/djopur3de/image/upload/v1739522436/default_dhfy2s.png"
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
            {onlineUsers?.map((onlineUser) => (
              <ChatOnline
                key={onlineUser.userId}
                onlineUserId={onlineUser.userId}
                setCurrentChat={setCurrentChat}
                currentUser={user}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
