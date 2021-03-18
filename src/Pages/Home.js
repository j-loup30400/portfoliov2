import React, {useState} from "react"
import styled from 'styled-components';

// carousel
import Project from "../components/Carousel/Project";
import Selector from "../components/Carousel/Selector" ;


const StyledAboutContainer = styled.div`
 width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(360deg, #FFFFFF -2.86%, rgba(255, 255, 255, 0) 58.69%), #FED677;
    color: #0A2268;

  h1{
    text-align: center; 
       font-family: unpack;
       line-height: 54px;
       font-size: 52px;
       color: #0A2268;

  }

  p{
    font-family: Poor Story;
    font-size: 26px;
    line-height: 54px;
    text-align: center;
    font-weight: bold;
    padding: 8px;
  }
`

const StyledCarousel = styled.div`

    background-color: #00E8CE;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;

    div {
        width: 100%;
        display: flex;
        justify-content: center;
    }  
`;
const Home = () => {
    const [carouselImage, setCarouselImage] = useState(0);
   
    const firstImageToggle = () => setCarouselImage(0);
    const secondImageToggle = () => setCarouselImage(1);
    const thirdImageToggle = () => setCarouselImage(2);
    return(
        <>
        <StyledAboutContainer>
          <section>
          <h1>About Me</h1>
          <p>
          Front-end and UX/UI design are exciting career because it's always evolving and constantly changing. This means you'll always have the opportunity to interact with new tools and learn new skills, keeping you engaged in your career. It's a field that provide many opportunities for hands-on-learning. 
          </p>
         </section>
          </StyledAboutContainer> 
         <StyledCarousel>
         <Project imageNumber={carouselImage} />
                <div>
                    <Selector action={firstImageToggle} actionTwo={secondImageToggle} actionThree={thirdImageToggle} isActive={carouselImage} />
                </div>
         </StyledCarousel>
          </>
    )
}

export default Home