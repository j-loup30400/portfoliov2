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
    height: 120vh;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    height: 80vh;
  }

`;

const StyledFooter = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #00e8ce;
  width: 100vw;
  height: 10vh;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
    height: 10vh;
    position: relative;
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
          I'm an enthusiastic Junior Front-end Developer with a fine eye for
          detail, based in London, passionate about coding and UX & UI design.
          Welcome to my world
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
        <div>
       <div onClick={() => window.open("https://www.linkedin.com/in/jeanloup-cayuela-467165204/", "_blank")} className="footerLink"></div>   
            <div onClick={() => window.open("https://drive.google.com/file/d/10b8LNZb_yPAeeXggAkmBR-ARv6w36gBX/view?usp=sharing", "_blank")} className="footerCv"></div>
            <div onClick={() => window.open("https://github.com/j-loup30400", "_blank")} className="footerGit"></div>
        </div>
      </StyledFooter>
    </>
  );
};

export default Home;
