import React, { useState } from "react";
import styled from "styled-components";

// carousel
import Project from "../components/Carousel/Project";
import Selector from "../components/Carousel/Selector";

import Git from "../Images/git.png";
import Link from "../Images/link.png";
import CV from "../Images/cv.png";

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
    font-family: unpack;
    font-size: 52px;
    color: #0a2268;
    margin-bottom: 0;
  }

  p {
    font-size: 26px;
    line-height: 45px;
    text-align: center;
    font-weight: bold;
    padding: 8px;
  }
  @media all and (orientation: landscape) {
    h1 {
      text-align: center;
      text-shadow: 2.5px 2.5px #f4c2c2;
      font-family: "unpack-regular";
      font-size: 26px;
      color: #0a2268;
    }
    p {
      font-size: 16px;
      line-height: 32px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  gap: 12px;

  div {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    text-align: center;
    text-shadow: 5px 5px #f4c2c2;
    font-family: "unpack-regular";
    font-size: 52px;
    color: #0a2268;
  }
  @media all and (orientation: landscape) {
    height: 98vh;

    div {
      width: 30vw;
      height: 30vw;
      border-radius: 50%;
    }

    h1 {
      padding: 8px;
      text-align: center;
      text-shadow: 2.5px 2.5px #f4c2c2;
      font-family: unpack;
      font-size: 26px;
      color: #0a2268;
      margin: 0;
    }
  }
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #00e8ce;

  @media all and (orientation: landscape) {
    height: 23vh;

    img {
      height: 50px;
      width: 50px;
    }
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
        <h1>About Me</h1>
        <p>
          Front-end and UX/UI design are exciting career because it's always
          evolving and constantly changing. This means you'll always have the
          opportunity to interact with new tools and learn new skills, keeping
          you engaged in your career. It's a field that provide many
          opportunities for hands-on-learning.
        </p>
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
        <p>
          <a
            href="https://www.linkedin.com/in/jeanloup-cayuela-467165204/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Link}
              alt="linkedin logo"
              width="70px"
              height="70px"
            ></img>
          </a>
        </p>

        <p>
          <a
            href="https://drive.google.com/file/d/1duyc8f6jozdpFe8YQoeVE8wIJKVECYfS/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img src={CV} alt="cv" width="70px" height="70px"></img>
          </a>
        </p>
        <p>
          <a
            href="https://github.com/j-loup30400"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="git logo" width="70px" height="70px"></img>
          </a>
        </p>
      </StyledFooter>
    </>
  );
};

export default Home;
