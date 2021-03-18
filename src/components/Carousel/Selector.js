import React from "react";
import styled from 'styled-components';

const StyledCircleButtonsContainer = styled.div`
    display: flex;
     gap:8px;
`;

const StyledCircleButton = styled.button`
    border: 2px solid blue;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 0
        ? `#fffff`
        : `blue`
    };
    transition: all 500ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;

const StyledCircleButtonTwo = styled.button`
    border: 2px solid blue;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 1
      ? `#fffff`
        : `blue`
    };
    transition: all 500ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;

const StyledCircleButtonThree = styled.button`
     border: 2px solid black;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 2
        ? `#FED677`
        : `blue`
    };
    transition: all 500ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;

const Selector = ({ action, actionTwo, actionThree, isActive }) => (
    <StyledCircleButtonsContainer>
        <StyledCircleButton onClick={action} isActive={isActive} />
        <StyledCircleButtonTwo onClick={actionTwo} isActive={isActive} />
        <StyledCircleButtonThree onClick={actionThree} isActive={isActive} />
    </StyledCircleButtonsContainer>
)

export default Selector;