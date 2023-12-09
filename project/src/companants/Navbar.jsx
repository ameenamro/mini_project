import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <header>
      <h3>LOGO</h3>
      <nav>
        <ul className="nav_link">
          <Link to='/#'>logout</Link>


        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
