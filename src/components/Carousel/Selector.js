import React from "react";
import styled from "styled-components";

const StyledCircleButtonsContainer = styled.div`
  display: flex;
  gap: 22px;
  margin: 10px;
  button:focus {
    outline-style: none;
  }
  @media all and (orientation: landscape) {
   margin:5px;
  }

`;

const StyledCircleButton = styled.button`
  border: 0;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  background-color: ${({ isActive }) =>
    isActive === 0 ? `#FED677` : `#F4C2C2`};
  transition: all 500ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media all and (orientation: landscape) {
    border: 0px;
    width: 14px;
    height: 14px;
  }
`;

const StyledCircleButtonTwo = styled.button`
  border: 0;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  background-color: ${({ isActive }) =>
    isActive === 1 ? `#FED677` : `#F4C2C2`};
  transition: all 500ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media all and (orientation: landscape) {
   border: 0px;
    width: 14px;
    height: 14px;
  }
`;

const StyledCircleButtonThree = styled.button`
  border: 0;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  background-color: ${({ isActive }) =>
    isActive === 2 ? `#FED677` : `#F4C2C2`};
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media all and (orientation: landscape) {
    border: 0px;
    width: 14px;
    height: 14px;
  }
`;
const StyledCircleButtonFour = styled.button`
  border: 0;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  background-color: ${({ isActive }) =>
    isActive === 3 ? `#FED677` : `#F4C2C2`};
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media all and (orientation: landscape) {
    border: 0px;
    width: 14px;
    height: 14px;
  }
`;



const Selector = ({
  action,
  actionTwo,
  actionThree,
  actionFour,
  isActive,
}) => (
  <StyledCircleButtonsContainer>
    <StyledCircleButton onClick={action} isActive={isActive} aria-label='selec 1' />
    <StyledCircleButtonTwo onClick={actionTwo} isActive={isActive} aria-label='selec 2' />
    <StyledCircleButtonThree onClick={actionThree} isActive={isActive} aria-label='selec 3' />
    <StyledCircleButtonFour onClick={actionFour} isActive={isActive} aria-label='selec 4' />
  </StyledCircleButtonsContainer>
);

export default Selector;