import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => [signOut(auth)];
  return (
    <div className="navbar">
      <div className="logo">
        <h3>
          Land <span className="logo-2">scaping</span>{" "}
        </h3>
      </div>
      <div className="nav-menu">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        {user ? (
          <button onClick={handleSignOut}>Sign-Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
