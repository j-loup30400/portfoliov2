import React, {useState} from "react"
import styled from 'styled-components';

// carousel
import Project from "../components/Carousel/Project";
import Selector from "../components/Carousel/Selector" ;

import Git from "../Images/git.png"
import Link from "../Images/link.png"
import CV from "../Images/cv.png"


const StyledAboutContainer = styled.div`
 width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(360deg, #FFFFFF -2.86%, rgba(255, 255, 255, 0) 58.69%), #FED677;
    color: #0A2268;

  h1{
    text-align: center; 
    text-shadow: 5px 5px #F4C2C2;
       font-family: unpack;
       font-size: 52px;
       color: #0A2268;
       
     
  }

  p{
    font-size: 26px;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    padding: 8px;
  }
`

const StyledCarousel = styled.div`

background: linear-gradient(
180deg
,#FFFFFF 0%,rgba(255,255,255,0) 100%),linear-gradient(
360deg
,#FFFFFF -2.86%,rgba(255,255,255,0) 58.69%),#00E8CE;
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
    h1{
    text-align: center; 
    text-shadow: 5px 5px #F4C2C2;
       font-family: "unpack-regular";
       font-size: 52px;
       color: #0A2268;
       margin:0;
    }`;

const StyledFooter = styled.div`
display:flex;
flex-direction:row;
justify-content: space-around;
background: linear-gradient(180deg, #FFFFFF 0%, 
rgba(255, 255, 255, 0) 100%), #00E8CE;

`;

const Home = () => {
    const [carouselImage, setCarouselImage] = useState(0);
   
    const firstImageToggle = () => setCarouselImage(0);
    const secondImageToggle = () => setCarouselImage(1);
    const thirdImageToggle = () => setCarouselImage(2);
    const fourthImageToggle = () => setCarouselImage(3);
    const fifthImageToggle = () => setCarouselImage(4);

    return(
        <>
        <StyledAboutContainer>
          <h1>About Me</h1>
          <p>
          Front-end and UX/UI design are exciting career because it's always evolving and constantly changing. This means you'll always have the opportunity to interact with new tools and learn new skills, keeping you engaged in your career. It's a field that provide many opportunities for hands-on-learning. 
          </p>
          </StyledAboutContainer> 
         <StyledCarousel>
          <h1>Projects</h1> 
         <Project imageNumber={carouselImage} />
            
                    <Selector action={firstImageToggle} actionTwo={secondImageToggle} actionThree={thirdImageToggle} actionFour={fourthImageToggle} actionFives={fifthImageToggle} isActive={carouselImage} />
                
         </StyledCarousel>
         <StyledFooter>
         
           <p>
             <a href="https://www.linkedin.com/in/jeanloup-cayuela-467165204/" target="_blank" rel="noreferrer">
             <img src={Link} alt="linkedin logo" width="50px" height="50px"></img>
              </a>
              
           </p>
           
           <p>
             <a href="https://drive.google.com/file/d/1duyc8f6jozdpFe8YQoeVE8wIJKVECYfS/view?usp=sharing" target="_blank" rel="noreferrer">
             <img src={CV} alt="cv" width="50px" height="50px" ></img>
              </a>
              
           </p>
           <p>
             <a href="https://github.com/j-loup30400" target="_blank" rel="noreferrer">
             <img src={Git} alt="git logo" width="50px" height="50px"></img>
              </a>
              
           </p>
           
         </StyledFooter>
          </>
    )
}

export default Home