import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__page">
        <h2>Sign-In</h2>
        <form>
          <div className="login__email">
            <h5>E-mail</h5>
            <input type="text" />
          </div>

          <div className="login__password">
            <h5>Password</h5>
            <input type="password" />
          </div>
          <button className="login__signInButton"> Sign In</button>
          <p className="login__terms">
            By signing-in you agree to the Demo AMAZON Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            interest-Based Ads Notice.
          </p>
          <button className="login__createButton">
            Create Your Demo Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
