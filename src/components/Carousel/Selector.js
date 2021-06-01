import React from "react";
import styled from "styled-components";

const StyledCircleButtonsContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
  position: relative;
  left: 20%;
  top:10%;
  width: 50%;
  padding: 5vw;
  button:focus {
    outline-style: none;
  }

`;

const StyledCircleButton = styled.button`
  border: 0;
  border-radius: 50%;
  width: 6vw;
  height: 6vw;
  background-color: ${({ isActive }) =>
    isActive === 0 ? `#FED677` : `#F4C2C2`};
  transition: all 500ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media all and (orientation: landscape) {
    border: 0px;
    width: 3vw;
    height: 3vw;
  }
`;

const StyledCircleButtonTwo = styled.button`
  border: 0;
  border-radius: 50%;
  width: 6vw;
  height: 6vw;
  background-color: ${({ isActive }) =>
    isActive === 1 ? `#FED677` : `#F4C2C2`};
  transition: all 500ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media all and (orientation: landscape) {
   border: 0px;
    width: 3vw;
    height: 3vw;
  }
`;

const StyledCircleButtonThree = styled.button`
  border: 0;
  border-radius: 50%;
  width: 6vw;
  height: 6vw;
  background-color: ${({ isActive }) =>
    isActive === 2 ? `#FED677` : `#F4C2C2`};
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media all and (orientation: landscape) {
    border: 0px;
    width: 3vw;
    height: 3vw;
  }
`;
const StyledCircleButtonFour = styled.button`
  border: 0;
  border-radius: 50%;
  width: 6vw;
  height: 6vw;
  background-color: ${({ isActive }) =>
    isActive === 3 ? `#FED677` : `#F4C2C2`};
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media all and (orientation: landscape) {
    border: 0px;
    width: 3vw;
    height: 3vw;
  }
`;
const StyledCircleButtonFive = styled.button`
  border: 0;
  border-radius: 50%;
  width: 6vw;
  height: 6vw;
  background-color: ${({ isActive }) =>
    isActive === 4 ? `#FED677` : `#F4C2C2`};
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media all and (orientation: landscape) {
    border: 0px;
    width: 3vw;
    height: 3vw;
  }
`;



const Selector = ({
  action,
  actionTwo,
  actionThree,
  actionFour,
  actionFive,
  isActive,
}) => (
  <StyledCircleButtonsContainer>
    <StyledCircleButton onClick={action} isActive={isActive} aria-label='selec 1'/>
    <StyledCircleButtonTwo onClick={actionTwo} isActive={isActive} aria-label='selec 2'/>
    <StyledCircleButtonThree onClick={actionThree} isActive={isActive} aria-label='selec 3'/>
    <StyledCircleButtonFour onClick={actionFour} isActive={isActive} aria-label='selec 4'/>
    <StyledCircleButtonFive onClick={actionFive} isActive={isActive} aria-label='selec 5'/>
  </StyledCircleButtonsContainer>
);

export default Selector;
