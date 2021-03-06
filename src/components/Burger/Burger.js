import React from "react";
import styled from 'styled-components';


const StyledBurger = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3 ;
  

  &:focus {
    outline: none;
  }



  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ modalOpen }) => modalOpen ? `${"#00E8CE"}` : `${"#0A2268"}`};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;


    :first-child {
      transform: ${({ modalOpen }) => modalOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ modalOpen }) => modalOpen ? '0' : '1'};
      transform: ${({ modalOpen }) => modalOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ modalOpen }) => modalOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  

    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      width: 4rem;  
      height: 0.4rem;
      right: 4rem;
      top: 1.7rem;
      transform-origin: 15px;
    }
     
  }
  @media all and (orientation: landscape) {
    
        top: 1rem;
        right: 2rem;
        
       div{
         display: none;
         pointer-events:none;
       }
} 



`;

const Burger = ({ modalOpen, setModalOpen }) => {
    return (
        <StyledBurger modalOpen={modalOpen} onClick={() => setModalOpen(!modalOpen)} aria-label='open menu' >
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default Burger;