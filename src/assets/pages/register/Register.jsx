import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        passwordAgain: passwordAgain.current.value,
      };

      try {
        axios.post("https://social-media-rest-api-xpqj.onrender.com/api/auth/register", user);
        navigate("/login");
          
      } catch (err) {
        console.log(err);
      }
    }
  };

  

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
          <form onSubmit={handleFormSubmit} className="RegisterBox">
            <input
              type="text"
              placeholder="Username"
              className="RegisterInput"
              ref={username}
              required
            />
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="RegisterInput"
              required
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="RegisterInput"
              required
              minLength="6"
            />
            <input
              ref={passwordAgain}
              type="password"
              placeholder="Password Again"
              className="RegisterInput"
              required
              minLength="6"
            />

            <button type="submit" className="RegisterButton">
              Sign In
            </button>
            <Link to="/login" className="RegisterButton">
              Login to Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
