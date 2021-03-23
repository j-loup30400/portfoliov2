import React from 'react';
import styled from 'styled-components'
import emailjs from 'emailjs-com';

import Git from "../Images/git.png"
import Link from "../Images/link.png"
import CV from "../Images/cv.png"




const StyledContact = styled.div`
 input, button:focus { outline-style: none; }
display: flex;
flex-direction: column;
align-items: center;
background: linear-gradient(
180deg
,#FFFFFF 0%,rgba(255,255,255,0) 100%),linear-gradient(
360deg
,#FFFFFF -2.86%,rgba(255,255,255,0) 58.69%),#FED677;


label{
    display: flex;
    font-family: "unpack-regular";
  flex-direction: row;
  justify-content: center;
  text-align: center;
  line-height: 26px;
  margin-bottom: 10px;
  color: #0A2268;
  margin:0;
  padding: 8px;
}

input{
    width: 50vw;
    border: 2px solid #F4C2C2;
    padding:8px;
}
button{
    color: #0A2268;
    background-color:#F4C2C2;
     border-radius: 20px;  
    border: 2px solid ;
    box-shadow: 2px 2px #00E8CE;
    margin-bottom: 10%;
}
button:hover {
      color: #FED677;
    }

textarea {
       width: 50vw ; 
       height: 15vh;
       border: 2px solid #F4C2C2;   
       
}

 `
const StyledFooterContact = styled.div`
display:flex;
flex-direction:column;
background: linear-gradient(180deg, #FFFFFF 0%, 
rgba(255, 255, 255, 0) 100%), #00E8CE;


    div {
     display:flex;
     flex-direction: row;
     justify-content: space-around;
    }`


const Contact = () => {
return(
    <div>
    <StyledContact>
   <div>    
    <label htmlFor="name">[your name]</label>
    <input type="text" name="name" placeholder="John Doe"/>
    <label htmlFor="Email">[your email]</label>
    <input type="text" name="Email" placeholder="Email@mail.com"/>
    </div> 
    {/* <label htmlFor="Subject">[your subject]</label>
    <input type="text" name="Subject" placeholder="Subject"/> */}
    <hr></hr>
    <label htmlFor="message">[your message]</label>
    <textarea id="message" name="message"  placeholder="Thanks for your consideration"></textarea>
    <hr></hr>
    <button>Submit</button>
    </StyledContact>
    <StyledFooterContact>
         <div>
           <p>
             <a href="https://www.linkedin.com/in/jeanloup-cayuela-467165204/">
             <img src={Link} alt="linkedin logo" width="50px" height="50px"></img>
              </a>
              
           </p>
           
           <p>
             <a href="https://drive.google.com/file/d/1duyc8f6jozdpFe8YQoeVE8wIJKVECYfS/view?usp=sharing">
             <img src={CV} alt="cv" width="50px" height="50px" ></img>
              </a>
              
           </p>
           <p>
             <a href="https://github.com/j-loup30400">
             <img src={Git} alt="git logo" width="50px" height="50px"></img>
              </a>
              
           </p>
           </div>
           </StyledFooterContact>
    </div>
)


    }

export default Contact;