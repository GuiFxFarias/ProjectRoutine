import "./MobileMenu";
import "./NavbarStyle.css";

import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [active, setActive] = useState(false);

  const ToggleMode = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="navbar">
        <div className={active ? "icon" : ".iconNone"} onClick={ToggleMode}>
          <AiOutlineMenu />
        </div>
        <div className="name">1</div>
        <div className="placeLogin">2</div>
      </nav>
      <MobileMenu customClass={active ? "showMenu" : "hiddenMenu"} />
    </>
  );
}

export default Navbar;
