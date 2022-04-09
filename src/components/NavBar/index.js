import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Braxton Hotton
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Who I Am!
          </NavLink>
          <NavLink to='/projects' activeStyle>
            My Projects!
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Me!
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;