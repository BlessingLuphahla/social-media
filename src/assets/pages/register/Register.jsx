import "./register.css";

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
            <input  type="email" placeholder="Email" className="RegisterInput" />
            <input type="password" placeholder="Password" className="RegisterInput" />
            <button className="RegisterButton">Sign Up</button>
            <button className="RegisterRegisterButton">
              Login to Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
