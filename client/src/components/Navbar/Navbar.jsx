import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../assets/images/Navbar_logo.png'

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: ${({ navbar }) => (navbar ? '#1c4943' : 'transparent')};
  color: white;
  z-index: 3;
  transition: all 0.3s ease;

  .logo {
    padding: 18px 18px;
    font-weight: 800;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

const Navbar = ({scrollVal = 25}) => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= scrollVal) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeBackground);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <Nav navbar={navbar}>
      <img src={logo} alt="" />
      {/* <div className="logo"><img src={logo} alt="" /></div> */}
      <Burger />
    </Nav>
  );
};

export default Navbar;