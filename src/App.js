import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Classification from "./Page/Classification/Classification";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import Mydiary from "./Page/My diary/Mydiary";
import Contact from "./Page/Contact/Contact";
import { Routes, Route, Link } from "react-router-dom";
import Logout from "./Page/Logout/Logout";
import { AuthProvider } from "./Auth";
import history from "./history";

function App() {
  return (
    <>
      <Navbar />
      <AuthProvider>
        <Routes history={history}>
          <Route path="/" element={<Home />}></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mydiary" element={<Mydiary />}></Route>
          <Route path="/classification" element={<Classification />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<Logout />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
