
import React from 'react'
import styled from "styled-components"


const StyledModal = styled.div`
 width: 90vw;
  height: 75vh;
  background: linear-gradient(rgba(255, 192 , 203, 0.1),rgba(255,192,203,0.5));
  position: fixed;
  transform: translate(-50%, -50%);
  top:50% ;
  left:50%;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: center;

p{
    color: red;
    opacity: 1;
}

button{
    align-items: center
}

`
function Modal({showModal, setShowModal})  {
    return (
        <>
        {showModal ? <StyledModal>
            <p>thank you for everything</p>
            <button onClick={() => setShowModal()}></button>
        </StyledModal> : null}
        
        </>
    )
}

export default Modal
