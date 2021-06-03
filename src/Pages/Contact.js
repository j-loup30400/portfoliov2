import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";


import Modal from "../components/Modal/Modal";

const Move1 = keyframes`
from { top:25% } 
to {top: 40% }  `;

const Move2 = keyframes`
from {top : 55%}
to {top :  50%} `;

const Move3 = keyframes`
from {left : 12vh}
to {left :  2vh}
`;

const Move4 = keyframes`
from {bottom : -10%}
to {bottom: -22%}`;

export const AnimeDesktop = styled.div`
  position: absolute;
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  background-color: white;
  background: linear-gradient(to left top, #00e8ce, #f4c2c2);
  bottom: 1%;
  right: 7%;
  animation: ${Move4} alternate infinite;
  animation-duration: 3s;

  @media all and (orientation: portrait) {
    display: none;
  }
`;

export const AnimeSmall = styled.div`
  position: absolute;
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  background-color: white;
  background: linear-gradient(to left top, #00e8ce, #f4c2c2);
  top: 25%;
  left: 7%;
  animation: ${Move1} alternate infinite;
  animation-duration: 3s;

  @media all and (orientation: landscape) {
    width: 5vw;
    height: 5vw;
  }
`;
export const AnimeMedium = styled.div`
  position: absolute;
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  background: linear-gradient(to left top, #00e8ce, #f4c2c2);
  top: 55%;
  right: 3%;
  animation: ${Move2} alternate infinite;
  animation-duration: 3s;

  @media all and (orientation: landscape) {
    width: 10vw;
    height: 10vw;
  }
`;
export const AnimeLarge = styled.div`
  position: absolute;
  width: 45vw;
  height: 45vw;
  border-radius: 50%;
  background: linear-gradient(to right bottom, #f4c2c2, #00e8ce);
  bottom: 12vh;
  left: 4vw;
  animation: ${Move3} alternate infinite;
  animation-duration: 3s;

  @media all and (orientation: landscape) {
    width: 23vw;
    height: 23vw;
    bottom: -30vh;
  }
`;

const StyledContact = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 82vh;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(360deg, #ffffff -2.86%, rgba(255, 255, 255, 0) 58.69%),
    #fed677;

  @media all and (orientation: landscape) {
    height: 116vh;
    justify-content:space-evenly;
  }

  h1 {
    text-align: center;
    text-shadow: 5px 5px #f4c2c2;
    font-family: "unpack-regular";
    font-size: 6.89vh;
    color: #0a2268;
    margin: 0;

    @media all and (orientation: landscape) {
      text-align: center;
      text-shadow: 2.5px 2.5px #f4c2c2;
      font-size: 4vw;
      color: #0a2268;
      margin: 0;
    }
  }

  input {
    text-align: center;
    border: 2px solid #f4c2c2;
    padding: 1rem;
    font-family: "poor-story";
    font-size: 5vw;
    z-index: 0;
    width: 50vw;

    @media all and (orientation: landscape) {
      font-size: 2vw;
      padding: 8px;
      width: 22vw;
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
    @media all and (orientation: landscape) {
     margin-top: 5vh;
      width: 15vw;
      font-size: 2vw;
      
    }
  }

  textarea {
    width: 60vw;
    height: 15vh;
    border: 2px solid #f4c2c2;
    text-align: center;
    font-family: "poor-story";
    font-size: 5vw;
    z-index: 0;

    @media all and (orientation: landscape) {
      width: 25vw;
      height: 10vw;
      font-size: 2vw;
    }
  }
`;
const StyledFooterContact = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #00e8ce;
  width: 100vw;
  height: 10vh;
  padding-top:2vh;
  padding-bottom: 2vh;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
    height: 10vh;
    position: relative;
  }
  a::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
 
`;


const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9wm2wrl",
        "template_wa7f8ea",
        e.target,
        "user_OILBGIng837FGMHE0V0EI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <AnimeDesktop />
      <AnimeSmall />
      <AnimeMedium />
      <AnimeLarge />
      <StyledContact onSubmit={sendEmail}>
        <h1>Say Hello</h1>
        <label htmlFor="name"></label>
        <input type="text" name="from_name" placeholder="Your name" required />
        <label htmlFor="Email"></label>
        <input type="text" name="Email" placeholder="Your email" required />
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          placeholder="Your lovely message"
        ></textarea>
        <button type="submit" value="Send" onClick={openModal}>
          Submit
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </StyledContact>

      <StyledFooterContact>
      <div>
          <div className="footerLink">
            <a
              href="https://www.linkedin.com/in/jeanloup-cayuela-467165204/"
              target="_blank"
              rel="noreferrer"
            ><span></span></a>
          </div>
          <div className="footerCv">
            <a
              href="https://drive.google.com/file/d/1qHC2ncj99SD__qZxwHbzHdG_5bPcF_ff/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            ><span></span></a>
          </div>
          <div className="footerGit">
            <a href="https://github.com/j-loup30400" target="_blank" rel="noreferrer"><span></span></a>
          </div>
        </div>
      </StyledFooterContact>
    </div>
  );
};

export default Contact;
