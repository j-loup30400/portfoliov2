import React, {useState} from 'react';
import styled from 'styled-components'
import emailjs from 'emailjs-com';

import Git from "../Images/git.png"
import Link from "../Images/link.png"
import CV from "../Images/cv.png"
import Modal from "../components/Modal/Modal"




const StyledContact = styled.form`
display: flex;
flex-direction: column;
justify-content:space-evenly;
align-items: center;
padding: 1rem;
height: 79vh;
background: linear-gradient(
180deg
,#FFFFFF 0%,rgba(255,255,255,0) 100%),linear-gradient(
360deg
,#FFFFFF -2.86%,rgba(255,255,255,0) 58.69%),#FED677;


h1{
    text-align: center; 
    text-shadow: 5px 5px #F4C2C2;
       font-family: unpack;
       font-size: 52px;
       color: #0A2268;
     
  }

input{
    text-align: center;
    border: 2px solid #F4C2C2;
    padding:1rem;
    font-family: "poor-story";
    font-size: 18px;
}
button{
  
  outline: none;
    color: #0A2268;
    background-color:#F4C2C2;
     border-radius: 20px;  
    border: 2px solid ;
    box-shadow: 2px 2px #00E8CE;
     margin : 1rem auto ;
     width: 30vw;
     padding: 8px;
     font-family: "poor-story";
     font-size: 18px;
  
}


textarea {
       width: 50vw ; 
       height: 15vh;
       border: 2px solid #F4C2C2;        
       text-align: center;
       font-family: "poor-story";
       font-size : 18px;
       
}
/* @media all and (orientation: landscape) {
  height: 50vh;
} */
`
const StyledFooterContact = styled.footer`
display:flex;
flex-direction:row;
background: linear-gradient(180deg, #FFFFFF 0%, 
rgba(255, 255, 255, 0) 100%), #00E8CE;
 justify-content: space-evenly;


`



const Contact = () => {
   const [showModal, setShowModal] = useState(false);
   console.log(showModal)

  const openModal = () => {
    setShowModal (prev => !prev)
  }


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9wm2wrl', 'template_wa7f8ea', e.target, 'user_OILBGIng837FGMHE0V0EI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
return(
    <div> 
       <StyledContact onSubmit={sendEmail}> 
       <h1>Say Hello</h1>
    <label htmlFor="name"></label>
    <input type="text" name="from_name" placeholder="Your name" required/> 
    <label htmlFor="Email"></label>
    <input type="text" name="Email" placeholder="Your email" required/>
    <label htmlFor="message"></label>
     <textarea id="message" name="message"  placeholder="Your lovely message"></textarea>
   <button type="submit" value="Send" onClick={openModal}>Submit</button>
  <Modal showModal={showModal} setShowModal={setShowModal} /> 
    </StyledContact>
  
   
    <StyledFooterContact>
           <p>
             <a href="https://www.linkedin.com/in/jeanloup-cayuela-467165204/" target="_blank" rel="noreferrer">
             <img src={Link}  alt="linkedin logo" width="50px" height="50px"></img>
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
           
           </StyledFooterContact>
    </div>
)


    }

export default Contact;