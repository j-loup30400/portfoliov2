import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const StyledBurgerDesktop = styled.div`
  position: absolute;
  right: 1rem;
  margin: 0;
  top: 0;
  display: flex;
  a {
    font-size: 3vw;
    line-height: 1.59vw;
    text-decoration: none;
    color: #0a2268;
  }

  @media all and (orientation: portrait) {
    display: none;
  }
`;
const StyledTitle = styled.div`
  width: 100%;
  background: linear-gradient(
      358.47deg,
      #ffffff 1.3%,
      rgba(255, 255, 255, 0.902552) 10.8%,
      rgba(255, 255, 255, 0) 98.74%
    ),
    #00e8ce;
  display: flex;
  margin: 0;
  flex-direction: column;
  color: #0a2268;
  position: sticky;
  top: 0;
  z-index: 50;

  h2 {
    font-family: "unpack-regular";
    font-size: 4.77vh;
    line-height: 3.18vh;
    padding: 8px;
  }
  @media all and (orientation: landscape) {
    h2 {
      font-size: 3vw;
      line-height: 1.59vw;
    }

    button {
      display: none;
    }
  }
`;

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <StyledTitle>
      <Burger modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Menu modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <h2>Cayuela Jean-Loup</h2>
      <StyledBurgerDesktop>
        <h2>
         
          <Link to="/">Home</Link>
        </h2>
        <h2>
          
          <Link to="/Contact">Contact</Link>
        </h2>
      </StyledBurgerDesktop>
    </StyledTitle>
  );
};
export default Navbar;
