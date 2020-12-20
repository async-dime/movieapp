import React, { useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/Navbar.sass";
import Search from "./search"

const NavBar = () => {

  return (
    <header>
      <div className="navbar-container">
        <div className="navbar">
          <h1>MOVIE REVIEW</h1>
          {/* <Search search={search} /> */}
          <h3>Sign In</h3>
        </div>
      </div>
    </header>
  );
}

export default NavBar