import "./rightbar.css";
import ad from "../../assets/images/ad.jpg";
import gift from "../../assets/images/gift.jpg";
import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useParams } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";

function Rightbar() {
  const { user: currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const { username } = useParams();

  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser.followings, user?._id]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  const HomeRightBar = () => {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;

    const [friends, setFriends] = useState([]);
    useEffect(() => {
      const getFriends = async () => {
        if (!user?.followings) return;

        try {
          const friendList = await axios.get(`/api/users/friends/${user._id}`);
          setFriends(friendList);
        } catch (error) {
          console.error("Error fetching followings:", error);
        }
      };

      getFriends();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.username]);

    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={gift} alt=""></img>
          <span className="birthdayText">
            <b>Carly Mushkit</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src={ad} alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {friends.map((user) => (
            <li className="rightbarFriend" key={user._id}>
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src={
                    user.profilePicture
                      ? PF + "images/person/" + user.profilePicture
                      : PF + "images/person/" + "defaultProfile.jpg"
                  }
                  alt=""
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{user.username}</span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;

    const [friends, setFriends] = useState([]);
    useEffect(() => {
      const getFriends = async () => {
        if (!user?.followings) return;

        try {
          const usersData = await Promise.all(
            user.followings.map((followingId) =>
              axios
                .get(`/api/users?userId=${followingId}`)
                .then((res) => res.data)
            )
          );
          setFriends(usersData);
        } catch (error) {
          console.error("Error fetching followings:", error);
        }
      };

      getFriends();
    }, []);

    const handleFollow = async () => {
      try {
        if (followed) {
          await axios.put(`/api/users/${user._id}/unfollow`, {
            userId: currentUser._id,
          });
          setFollowed(false);
        } else {
          await axios.put(`/api/users/${user._id}/follow`, {
            userId: currentUser._id,
          });
          setFollowed(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleFollow}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}

        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((user) => (
            <div key={user._id} className="rightbarFollowing">
              <Link to={`/profile/${user.username}`}>
                <img
                  src={
                    user.profilePic
                      ? PF + "images/person/" + user.profilePic
                      : PF + "images/person/defaultProfile.jpg"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
              </Link>
              <span className="rightbarFollowingName">{user.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
