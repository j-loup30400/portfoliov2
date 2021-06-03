import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 10px;
  outline: none;
  background: radial-gradient(
      50% 114.08% at 50% 50%,
      #ffffff 0%,
      rgba(255, 255, 255, 0.744792) 37.32%,
      rgba(255, 255, 255, 0) 100%
    ),
    #f4c2c2;
  width: 90%;
  height: 60%;
  left: 5%;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
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

  @media all and (orientation: landscape) {
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    left: 30%;
    top: 5%;
  }
`;
const Project = ({ imageNumber }) => {
  return (
    <StyledCard>
      <div>
        {imageNumber === 0 ? (
          <>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front1"></div>
                <div className="flip-card-back1">
                  {" "}
                  <a
                    href="https://github.com/j-loup30400/Pick-A-Chew"
                    target="_blank"
                    rel="noreferrer"
                  ><span></span></a>
                </div>
              </div>
            </div>
          </>
        ) : imageNumber === 1 ? (
          <>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front2"></div>
                <div className="flip-card-back2">
                  <a
                    href="https://github.com/j-loup30400/Code-Caffe"
                    target="_blank"
                    rel="noreferrer"
                  ><span></span></a>
                </div>
              </div>
            </div>
          </>
        ) : imageNumber === 2 ? (
          <>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front3"></div>
                <div className="flip-card-back3">
                  <a
                    href="https://github.com/j-loup30400/Twilio-Hackathon-"
                    target="_blank"
                    rel="noreferrer"
                  ><span></span></a>
                </div>
              </div>
            </div>
          </>
        ) : imageNumber === 3 ? (
          <>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front4"></div>
                <div className="flip-card-back4">
                  <a
                    href="https://github.com/j-loup30400/Collage-Project"
                    target="_blank"
                    rel="noreferrer"
                  ><span></span></a>
                </div>
              </div>
            </div>
          </>
        )
        : imageNumber === 4 ? (
          <>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front5"></div>
                <div className="flip-card-back5">
                  <a
                    href="https://www.figma.com/file/UN1KwT5YQrTMWJGYC7kEYS/Who's-that-pokemon"
                    target="_blank"
                    rel="noreferrer"
                  ><span></span></a>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </StyledCard>
  );
};

export default Project;
