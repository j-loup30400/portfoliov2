import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Thanks from "../../Images/thanks.gif";

const StyledModal = styled.div`
  width: 90vw;
  height: 75vh;
  background: linear-gradient(
    rgba(255, 192, 203, 0.1),
    rgba(255, 192, 203, 0.5)
  );
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (orientation: landscape) {
    width: 100vw;
    height: 100vh;
    padding: 8px;

    img {
      width: 20vw;
      padding: 1rem;
    }
  }

  button {
    outline: none;
    color: #0a2268;
    background-color: #f4c2c2;
    border-radius: 3.5vw;
    border: 2px solid;
    box-shadow: 2px 2px #00e8ce;
    margin: 1rem auto;
    width: 40vw;
    padding: 8px;
    font-family: "poor-story";
    font-size: 5vw;
    z-index: 0;
    position: absolute;
    bottom: 10vh;
    left: 25vw;
    @media all and (orientation: landscape) {
      font-size: 2vw;
      left: 31vw;
      bottom: 5vh;
    }
  }

  p {
    font-size: 3.44vh;
    line-height: 5vh;
    text-align: center;
    font-family: "unpack-regular";
    color: #0a2268;
    text-shadow: 5px 5px #f4c2c2;
    margin: 0;
    padding: 8px;
    @media all and (orientation: landscape) {
      font-size: 3vw;
      line-height: 2.5vw;
    }
  }
`;
function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <StyledModal>
          <img src={Thanks} alt="dancing man" />
          <p>Thank you for your time and consideration </p>
          <button>
            {" "}
            <Link to="/">See you soon</Link>{" "}
          </button>
        </StyledModal>
      )}
    </>
  );
}

export default Modal;
