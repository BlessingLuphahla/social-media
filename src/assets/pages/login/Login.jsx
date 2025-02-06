import { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { LoginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, error, dispatch } = useContext(AuthContext);

  function handleFormSubmit(e) {
    e.preventDefault();

    LoginCall(
      { email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  }

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
            <br />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="loginInput"
              required
              minLength="6"
            />
            <button type="submit" className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Login"
              )}
            </button>
            {error && <span className="loginError">{error.message}</span>}
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register" className="loginButton">
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
