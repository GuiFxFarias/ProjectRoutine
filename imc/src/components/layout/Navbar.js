import "./MobileMenu";

import { AiOutlineMenu } from "react-icons/ai";
import React from "react";
import styled from "styled-components";

import { MenuMobile, Name, NavBar, PlaceLogin } from './NavbarStyle'


function Navbar() {
  return (
    <NavBar>
      <MenuMobile>
        <AiOutlineMenu />
      </MenuMobile>
      <Name>Name</Name>
      <PlaceLogin>Login</PlaceLogin>
    </NavBar>
  );
}

export default Navbar;
