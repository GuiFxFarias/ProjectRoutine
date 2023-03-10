import "./MobileMenu";
import "./NavbarStyle.css";

import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="name">Tempo de qualidade</div>
      </nav>
      <MobileMenu />
    </>
  );
}

export default Navbar;
