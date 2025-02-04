import { useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value,
    };

    email.current.value = "";
    password.current.value = "";

    console.log(user);
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
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="loginInput"
            />

            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register" className="loginButton">
              Create a New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
