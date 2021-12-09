import React, { useState } from "react";
import { useHref, Link } from "react-router-dom";
import "./Login.css";
import firebaseConfig from "../../config";
import history from "../../history";

const Login = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          //   const isNewUser = res?.additionalUserInfo?.isNewUser;
          console.log("res", res);
          //   if (isNewUser) {
          alert("Login success!");
          //   }
        });
      setCurrentUser(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (currentUser) {
    history.push("/");
  }

  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm ">
          <label>Email</label>
          <input
            className="loginInput"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="loginInput"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password..."
          />
        </form>
        <button onClick={submitLogin} className="loginButton">
          Login
        </button>
        <button className="loginRegisterButton">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </>
  );
};

export default Login;
