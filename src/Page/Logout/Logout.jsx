import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth";
import firebaseConfig from "../../config";
import React, { setSession } from "react";

const Logout = () => {
  return firebaseConfig
    .auth()
    .signOut()
    .then(() => {
      setSession();
    })
    .catch((error) => {
      setSession();
    });
};

export default Logout;
