import { useContext, useRef, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { LoginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  function handleFormSubmit(e) {
    e.preventDefault();
    const userCredentials = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log("Submitting:", userCredentials);
    LoginCall(userCredentials, dispatch);
  }

  useEffect(() => {
    console.log("Updated user:", user);
  }, [user]);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Redd Media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Redd Media.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleFormSubmit}>
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="loginInput"
              required
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="loginInput"
              required
              minLength="6"
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? "Logging in..." : "Login"}
            </button>
            {error && <span className="loginError">{error.message}</span>}
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
              <button className="loginButton">Create a New Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
