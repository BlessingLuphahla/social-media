import "./messenger.css";
import Topbar from "../topbar/TopBar";
import Conversation from "../conversations/Conversation";

function Messenger() {
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
            <Conversation
              source="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
              name="redd axe"
            />

            <Conversation
              source="https://images.pexels.com/photos/28184434/pexels-photo-28184434/free-photo-of-a-close-up-of-a-blue-ocean-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              name="PonyTail"
            />

            <Conversation
              source="https://images.pexels.com/photos/3428289/pexels-photo-3428289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              name="Grand Theft"
            />
            <Conversation
              source="https://images.pexels.com/photos/751691/pexels-photo-751691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              name="Anna Conda"
            />
            <Conversation
              source="https://images.pexels.com/photos/6022536/pexels-photo-6022536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              name="Bobby"
            />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">box</div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">online</div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
