import "./rightbar.css";
import ad from "../../assets/images/ad.jpg";
import gift from "../../assets/images/gift.jpg";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useParams } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import { useScreen } from "../../context/ScreenContext";

/**
 * Rightbar component is responsible for displaying additional user-related information
 * and interactions on the right side of the page. It includes two main subcomponents:
 * HomeRightBar and ProfileRightBar. The component fetches user data based on the
 * username from the URL parameters and determines if the current user is following
 * the profile being viewed. HomeRightBar displays a list of online friends and
 * additional information like birthdays and ads. ProfileRightBar provides detailed
 * information about the profile being viewed, including user information and friends,
 * and allows the current user to follow or unfollow the profile.
 */

function Rightbar() {
  const { user: currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const { username } = useParams();
  const [followed, setFollowed] = useState(false);
  const [friends, setFriends] = useState([]);
  const { isMobile } = useScreen();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!username) return;
        const res = await axios.get(
          import.meta.env.VITE_SERVER_URL + `/api/users?username=${username}`
        );
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [username]);

  useEffect(() => {
    if (user?.followings) {
      const getFriends = async () => {
        try {
          const usersData = await Promise.all(
            user.followings?.map((followingId) =>
              axios
                .get(
                  import.meta.env.VITE_SERVER_URL +
                    `/api/users?userId=${followingId}`
                )
                .then((res) => res.data)
            )
          );
          setFriends(usersData);
        } catch (error) {
          console.error("Error fetching friends:", error);
        }
      };
      getFriends();
    }
  }, [user]);

  useEffect(() => {
    if (user?._id && currentUser.followings) {
      setFollowed(currentUser.followings.includes(user._id));
    }
  }, [currentUser.followings, user]);

  const handleFollow = async () => {
    try {
      if (followed) {
        setFollowed(false);
        await axios.put(
          import.meta.env.VITE_SERVER_URL + `/api/users/${user._id}/unfollow`,
          {
            userId: currentUser._id,
          }
        );
      } else {
        setFollowed(true);
        await axios.put(
          import.meta.env.VITE_SERVER_URL + `/api/users/${user._id}/follow`,
          {
            userId: currentUser._id,
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  // HomeRightBar displays the list of online friends and birthday info

  if (isMobile) return;

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={gift} alt="" />
          <span className="birthdayText">
            <b>Carly Mushkit</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src={ad} alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Trending Posts</h4>
        <div>No posts are trending</div>
      </>
    );
  };

  // ProfileRightBar displays detailed user info and follow/unfollow button
  const ProfileRightBar = () => {
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
          {friends?.map((user) => (
            <div key={user._id} className="rightbarFollowing">
              <Link to={`/profile/${user.username}`}>
                <img
                  src={
                    user.profilePic
                      ? user.profilePic
                      : "https://res.cloudinary.com/djopur3de/image/upload/v1739522436/default_dhfy2s.png"
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
        {username ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
