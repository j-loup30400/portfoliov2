import React from "react";
import styled from "styled-components";

//  images
import firstPortrait from "../../Images/pick-a-chew.png";
import secondPortrait from "../../Images/code.png";
import thirdPortrait from "../../Images/nurserie.png";
import fourthPortrait from "../../Images/collage.png";
import firstReverse from "../../Images/reversePick-a-chew.png";
import secondReverse from "../../Images/reverseCode.png";
import thirdReverse from "../../Images/reverseNurserie.png";
import fourthReverse from "../../Images/reverseCollage.png";


const StyledCard = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  outline: none;
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


  `
const Project = ({ imageNumber }) => {
  return (
    <StyledCard>
      {imageNumber === 0 ? (
        <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="frontPhone" src={firstPortrait} alt="Project" />
              </div>

              <div className="flip-card-back">
               <a
            href="https://github.com/j-loup30400/Pick-A-Chew"
            target="_blank"
            rel="noreferrer"
          > 
                <img className="reversePhone" src={firstReverse} alt="Reverse Project" />
                 </a> 
              </div>
            </div>
          </div>
        </>
      ) : imageNumber === 1 ? (
        <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="front" src={secondPortrait} alt="Project 2" />
              </div>
              <div className="flip-card-back">
              <a
            href="https://github.com/j-loup30400/Code-Caffe"
            target="_blank"
            rel="noreferrer"
          > 
                <img
                 className="reverse"
                  src={secondReverse}
                  alt="reverse project 2"
                />
               </a> 
              </div>
            </div>
          </div>
        </>
      ) : imageNumber === 2 ? (
          <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="front" src={thirdPortrait} alt="Project 3" />
              </div>
              <div className="flip-card-back">
              <a
            href="https://github.com/j-loup30400/Twilio-Hackathon-"
            target="_blank"
            rel="noreferrer"
          > 
                <img
                  className="reverse"
                  src={thirdReverse}
                  alt="reverse project 3"
                />
                </a>
              </div>
            </div>
          </div>
        </>
      ) : imageNumber === 3 ? (
        <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="front"src={fourthPortrait} alt="Project 4" />
              </div>
              <div className="flip-card-back">
              <a
            href="https://github.com/j-loup30400/Collage-Project"
            target="_blank"
            rel="noreferrer"
          > 
                <img
                  className="reverse"
                  src={fourthReverse}
                  alt="reverse project 4"
                />
                </a>
              </div>
            </div>
          </div>
        </>
      ) : null }
    </StyledCard>
  );
};

export default Project;
