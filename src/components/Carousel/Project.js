import React from "react";
import styled from "styled-components";

//  images
import firstPortrait from "../../Images/pick-a-chew.png";
import secondPortrait from "../../Images/code.png";
import thirdPortrait from "../../Images/nurserie.png";
import fourthPortrait from "../../Images/collage.png";

const StyledCard = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
      50% 114.08% at 50% 50%,
      #ffffff 0%,
      rgba(255, 255, 255, 0.744792) 37.32%,
      rgba(255, 255, 255, 0) 100%
    ),
    #f4c2c2;
  padding: 8px;

  img {
    padding: 8px; 
     width: 120%;
     height: auto;
    cursor: pointer;
    outline: none;

    @media all and (orientation: landscape) {
     width: 80%
  }}
  `
const Project = ({ imageNumber }) => {
  return (
    <StyledCard>
      {imageNumber === 0 ? (
        <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={firstPortrait} alt="Project" />
              </div>

              <div className="flip-card-back">
              {/* <a
            href="https://www.linkedin.com/in/jeanloup-cayuela-467165204/"
            target="_blank"
            rel="noreferrer"
          > */}
                <img src={firstPortrait} alt="Reverse Project" />
                {/* </a> */}
              </div>
            </div>
          </div>
        </>
      ) : imageNumber === 1 ? (
        <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={secondPortrait} alt="Project 2" />
              </div>
              <div className="flip-card-back">
                <img
                  className="ipad"
                  src={secondPortrait}
                  alt="reverse project 2"
                />
              </div>
            </div>
          </div>
        </>
      ) : imageNumber === 2 ? (
          <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={thirdPortrait} alt="Project 3" />
              </div>
              <div className="flip-card-back">
                <img
                  className="ipad"
                  src={thirdPortrait}
                  alt="reverse project 3"
                />
              </div>
            </div>
          </div>
        </>
      ) : imageNumber === 3 ? (
        <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={fourthPortrait} alt="Project 4" />
              </div>
              <div className="flip-card-back">
                <img
                  className="ipad"
                  src={fourthPortrait}
                  alt="reverse project 4"
                />
              </div>
            </div>
          </div>
        </>
      ) : null }
    </StyledCard>
  );
};

export default Project;
