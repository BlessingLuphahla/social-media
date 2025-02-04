import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="Register">
      <div className="RegisterWrapper">
        <div className="RegisterLeft">
          <h3 className="RegisterLogo">Redd Media</h3>
          <span className="RegisterDesc">
            Connect with friends and the world around you on Redd Media.
          </span>
        </div>

        <div className="RegisterRight">
          <div className="RegisterBox">
            <input
              type="text"
              placeholder="Username"
              className="RegisterInput"
            />
            <input type="email" placeholder="Email" className="RegisterInput" />
            <input
              type="password"
              placeholder="Password"
              className="RegisterInput"
            />
            <input
              type="password"
              placeholder="Password Again"
              className="RegisterInput"
            />

            <button className="RegisterButton">Sign In</button>
            <Link to="/login" className="RegisterButton">Login to Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
