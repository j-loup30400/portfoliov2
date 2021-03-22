import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledModal = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
background-color: #F4C2C2;
height:100vh;
width:100vw;
font-size: 1.5rem;
  text-align: left;
  position:absolute;
  top:0;
  left:0;
  transition: transform 500ms;
  transform: translateX(-100%);
  transform: ${({ modalOpen }) => modalOpen ? 'translateX(0)' : 'translateX(1)'};
  a {
    font-size: 4rem;
    padding:16px;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.5rem;
    font-family: unpack;
    color: black;
    transition: color 0.3s linear;
    

    &:hover {
      color: #00E8CE;
    }
  }
`;

const Menu = ({ modalOpen, setModalOpen }) => {
  
  return (
    <StyledModal modalOpen={modalOpen}>
      {modalOpen && (
        <>
          <Link onClick={() => (( setModalOpen(!modalOpen)))} to="/">
            Home
          </Link>
          <Link onClick={() => (( setModalOpen(!modalOpen)))} to="/Contact">
            Contact 
          </Link>
        </>
      )}
    </StyledModal>
  )
}

export default Menu
