import React from "react";
import "./SignIn.css";
const SignIn = ({ title }) => {
  return (
    <div className="signIn__page">
      <h2 className="signIn__title">{title}</h2>
      <button className="signIn__button">Sign in securely</button>
    </div>
  );
};
export default SignIn;
