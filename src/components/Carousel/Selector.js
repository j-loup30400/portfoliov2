import React from "react";
import styled from 'styled-components';

const StyledCircleButtonsContainer = styled.div`
    display: flex;
     gap:8px;
     button:focus { outline-style: none; }
`;

const StyledCircleButton = styled.button`
    border: 2px solid #0A2268;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 0
        ? `#F4C2C2`
        : `#FED677`
    };
    transition: all 500ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;

const StyledCircleButtonTwo = styled.button`
    border: 2px solid #0A2268;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 1
      ? `#F4C2C2`
        : `#FED677`
    };
    transition: all 500ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;

const StyledCircleButtonThree = styled.button`
      border: 2px solid #0A2268;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 2
        ? `#F4C2C2`
        : `#FED677`
    };
    transition: all 300ms;
    
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;
const StyledCircleButtonFour = styled.button`
      border: 2px solid #0A2268;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 3
        ? `#F4C2C2`
        : `#FED677`
    };
    transition: all 300ms;
    
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;

const StyledCircleButtonFive = styled.button`
      border: 2px solid #0A2268;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 4
        ? `#F4C2C2`
        : `#FED677`
    };
    transition: all 300ms;
    
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;


const Selector = ({ action, actionTwo, actionThree, actionFour, actionFives, isActive }) => (
    <StyledCircleButtonsContainer>
        <StyledCircleButton onClick={action} isActive={isActive} />
        <StyledCircleButtonTwo onClick={actionTwo} isActive={isActive} />
        <StyledCircleButtonThree onClick={actionThree} isActive={isActive} />
        <StyledCircleButtonFour onClick={actionFour} isActive={isActive} />
        <StyledCircleButtonFive onClick={actionFives} isActive={isActive} />
    </StyledCircleButtonsContainer>
)

export default Selector;