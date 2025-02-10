import "./conversation.css";

// eslint-disable-next-line react/prop-types
function Conversation({ name, source }) {
  return (
    <div className="conversation">
      <img src={source} alt="" className="conversationImg" />
      <span className="conversationName">{name}</span>
    </div>
  );
}

export default Conversation;
