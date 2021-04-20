import React, { useState } from "react";
import styled from "styled-components";

// carousel
import Project from "../components/Carousel/Project";
import Selector from "../components/Carousel/Selector";

const StyledAboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(360deg, #ffffff -2.86%, rgba(255, 255, 255, 0) 58.69%),
    #fed677;
  color: #0a2268;

  h1 {
    text-align: center;
    text-shadow: 5px 5px #f4c2c2;
    font-family: "unpack-regular";
    font-size: 6.89vh;
    color: #0a2268;
    margin-bottom: 0;
  }

  p {
    font-size: 3.44vh;
    line-height: 45px;
    text-align: center;
    font-weight: bold;
    padding: 8px;
  }
  @media all and (orientation: landscape) {
    h1 {
      text-align: center;
      text-shadow: 2.5px 2.5px #f4c2c2;
      font-size: 4vw;
      color: #0a2268;
    }
    p {
      font-size: 2vw;
      line-height: 4.24vw;
      text-align: center;
      font-weight: bold;
      padding: 8px;
    }
  }
`;

const StyledCarousel = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(360deg, #ffffff -2.86%, rgba(255, 255, 255, 0) 58.69%),
    #00e8ce;
  width: 100vw;
  height: 70vh;
  h1 {
    text-align: center;
    text-shadow: 5px 5px #f4c2c2;
    font-family: "unpack-regular";
    font-size: 6.89vh;
    color: #0a2268;
    position: relative;
  }

  @media all and (orientation: landscape) {
    height: auto;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    height: 100vh;
    
  }
`;

const StyledFooter = styled.div`
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

const Home = () => {
  const [carouselImage, setCarouselImage] = useState(0);

  const firstImageToggle = () => setCarouselImage(0);
  const secondImageToggle = () => setCarouselImage(1);
  const thirdImageToggle = () => setCarouselImage(2);
  const fourthImageToggle = () => setCarouselImage(3);
  const fifthImageToggle = () => setCarouselImage(4);

  return (
    <>
      <StyledAboutContainer>
        <div className="about">
        <h1>About Me</h1>
        <p>
        Hello, I am Front End Developer currently based in London, UK where I have recently completed the Wild Code School Web & Mobile Development program. I am now looking to bring my passion for coding, as well as UX and UI design, to a full-time position. I am highly motivated, eager to learn, and constantly seeking to improve my skills and knowledge. I carry an exceptional ability to adapt to any type of team environment. I am team-oriented and get along well with others when working in a group setting. Feel free to contact me, I look forward to hearing from you.
        </p>
        </div>
      </StyledAboutContainer>
      <StyledCarousel>
        <h1>Projects</h1>
        <Project imageNumber={carouselImage} />

        <Selector
          action={firstImageToggle}
          actionTwo={secondImageToggle}
          actionThree={thirdImageToggle}
          actionFour={fourthImageToggle}
          actionFives={fifthImageToggle}
          isActive={carouselImage}
        />
      </StyledCarousel>
      <StyledFooter>
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
              href="https://drive.google.com/file/d/10b8LNZb_yPAeeXggAkmBR-ARv6w36gBX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            ><span></span></a>
          </div>
          <div className="footerGit">
            <a href="https://github.com/j-loup30400" target="_blank" rel="noreferrer"><span></span></a>
          </div>
        </div>
      </StyledFooter>
    </>
  );
};

export default Home;
