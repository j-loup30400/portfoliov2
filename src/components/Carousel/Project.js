import React from "react";
import styled from 'styled-components';


//  images
import firstPortrait from "../../Images/pik-a-chew.png";
import secondPortrait from "../../Images/code.png";
import thirdPortrait from "../../Images/Thyme.png"



const StyledCard = styled.div`
     border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
   background-color: #ffff;
   padding: 8px;

    img {
        width: 45%;
       border: 3px solid #F4C2C2;
      
    }

    h2 {
        font-size: 26px;
        line-height: 26px;
        text-align: center;
        font-family: unpack;
        color: #0A2268;
    }


`;

const Project = ({ imageNumber }) => {
  

    return (
        <StyledCard>
            {
                imageNumber === 0
                    ? (<>
                            <img src={firstPortrait} alt="Project" />
                            <h2>Pik-A-Chew</h2>
                            <div>
                                
                            </div>
                        </>)
                    : imageNumber === 1
                        ? (<>
                            <img src={secondPortrait} alt="Project 2" />
                            <h2>Hackathon Wild Code School</h2>
                           
                            <div>
                             
                            </div>
                        </>)
                        : (<>
                            <img src={thirdPortrait} alt="Project 3" />
                            <h2>Code Coffee</h2>
                            
                            <div>
                                
                            </div>
                        </>)
            }
        </StyledCard>

    )
}

export default Project;