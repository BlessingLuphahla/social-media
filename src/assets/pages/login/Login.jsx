import "./login.css";

function Login() {
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
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Sign In</button>
            <button className="loginButton">Login to Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
