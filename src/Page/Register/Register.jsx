import React, { useState } from "react";
import { useHref, Link } from "react-router-dom";

import "./Register.css";
import firebaseConfig from "../../config";

const Register = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = () => {
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          const isNewUser = res?.additionalUserInfo?.isNewUser;
          console.log("res", res);
          if (isNewUser) {
            alert("Register success!");
          }
        });
      setCurrentUser(true);
    } catch (error) {
      console.log(error);
    }
  };

  // if (currentUser) {
  //  this.props.history.push("/");
  //}

  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm ">
          <label>Email</label>
          <input
            className="registerInput"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="registerInput"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password..."
          />
        </form>
        <button onClick={submitRegister} className="registerButton">
          Register
        </button>
        <button className="registerLoginButton">
          <Link to="/Login">Login</Link>
        </button>
      </div>
    </>
  );
};

export default Register;
