import "./messenger.css";
import Topbar from "../topbar/TopBar";

function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            menu
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            box
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            online
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
