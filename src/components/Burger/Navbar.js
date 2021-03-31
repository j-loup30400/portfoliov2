import React, {useState} from "react";
import styled from 'styled-components';
import Burger from "./Burger";
import Menu from "./Menu";


const StyledTitle = styled.div`
 width: 100%;   
     background: linear-gradient(358.47deg, #FFFFFF 1.3%, rgba(255, 255, 255, 0.902552) 10.8%, rgba(255, 255, 255, 0) 98.74%), #00E8CE;
      display: flex;
      margin: 0;
       flex-direction: column;
       color: #0A2268; 
      position: sticky;
       top: 0;
       z-index: 50;

h2 {
     font-family: 'unpack-regular';
      font-size: 36px;
      line-height: 24px;
      padding: 8px;  
}
/* @media all and (orientation: landscape) {
    height:10vh;
} */
`;

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <StyledTitle>
            <Burger modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <Menu modalOpen={modalOpen} setModalOpen={setModalOpen}/>
           <h2>Cayuela Jean-Loup</h2> 
        </StyledTitle>
    )
}
export default Navbar