import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/marvel-logo-personnages.jpg";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="/" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/characters">CHARACTERS</Link>
            </li>
            <li>
              <Link to="/comics">COMICS</Link>
            </li>
            <li>
              <Link to="/favs">MY FAVS</Link>
            </li>
          </ul>
        </nav>
        <div className="login">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
