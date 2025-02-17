import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./logout.css";

const Logout = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch logout action
  };

  return <button className="logoutButton" onClick={handleLogout}>Logout</button>;
};

export default Logout;
