import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => console.alert(error.message));
  };
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/" className="login__name">
        <h1 className="login__logo">SHOP & SAVE</h1>
      </Link>

      <div className="login__page">
        <h2>Sign-In</h2>
        <form>
          <div className="login__email">
            <h5>E-mail</h5>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
            />
          </div>

          <div className="login__password">
            <h5>Password</h5>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
          </div>
          <button onClick={signIn} className="login__signInButton">
            Sign In
          </button>
          <p className="login__terms">
            By signing-in you agree to the Demo Shop and Save Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice and our
            interest-Based Ads Notice.
          </p>
          <button onClick={signUp} className="login__createButton">
            Create Your Demo Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
