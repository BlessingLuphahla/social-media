import "./message.css";

// eslint-disable-next-line react/prop-types
function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageWrapper">
        <div className="messageTop">
          <img
            className="messageImg"
            src="https://images.pexels.com/photos/15747834/pexels-photo-15747834/free-photo-of-statue-of-greyfriars-bobby.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="messageText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex
            eaque laudantium vel quidem, ?
          </p>
        </div>
        <div className="messageBottom">1 hour ago</div>
      </div>
    </div>
  );
}

export default Message;
