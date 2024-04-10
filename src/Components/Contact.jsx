import { useState } from "react"
import styled from "styled-components"

export const Contact = () => {
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [email,setEmail] = useState("");
  const [phonenumber,setPhonenumber] = useState("");
  const [message,setMessage] = useState("");

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  const valid = (email) => {
    return validateEmail(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
     setFirstname("");
     setLastname("");
     setPhonenumber("");
     setEmail("");
     setMessage("");
    alert("Message Sent Successfully")
  };
  return (
    <Container>
    <div className="contact-us">
      <p id="greet">Say Hi to the Team </p>
        <h1 style={{marginBottom:'10%', fontSize:'70px'}}>Contact Us</h1>
        <p id ="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br>Est placeat quisquam, exercitationem 
          ratione odio quis<br></br> a ipsa asperiores maxime obcaecati error et earum <br></br>aperiam laudantium aliquid 
          recusandae sit non! Eligendi?
        </p>
        <section style ={{fontSize:'14px', fontWeight:'bold'}} className="info">
          Address: XXXX, City name, <br></br> India<br></br>
          +91 1234785950<br></br>
          xxxxxxxx@gmail.com<br></br>

        </section>
        </div>
      <div className="form">
        <form onSubmit={handleSubmit}> 
        <div className="form-items">
          <div className="firstname">
          <label>First Name <sup>*</sup></label>
          <input placeholder="First Name" value={firstname} type="text" id="firstname"   onChange={(e)=>setFirstname(e.target.value)} required/>
          </div>
          <div className="lastname">
          <label>Last Name <sup>*</sup></label>
          <input placeholder="Last Name" value={lastname} type="text" id="lastname"  onChange={(e)=>setLastname(e.target.value)} />
          </div>
          <div className="contact number">
          <label>Contact Number </label>
          <input placeholder="Your Contact" value={phonenumber} type="text" id="phonenumber"   onChange={(e)=>setPhonenumber(e.target.value)}/>
          </div>
          <div className="'email">
          <label>Email <sup>*</sup></label>
          <input placeholder="Email" value={email} type="text" id="email"  onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div className="message">
          <label className="message-label">Message <sup>*</sup></label>
          <textarea placeholder="Message" value={message} type="text" id="message"  onChange={(e)=>setMessage(e.target.value)} />
          </div>
          <button type="submit" disabled ={!valid(email)}>Submit</button>
          </div>
        </form>
        
      </div>
    </Container>
  )
}



const Container = styled.div` 
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #f7f7f7;
  height:100vh;
  margin:0;
  padding:0;
  @media (max-width:768px) {
   display: flex;
   flex-flow: column;
   background-color: antiquewhite;
   height: auto;
   width: 768px;

  }

  .form{
    height: auto;
    width:50vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #5d5d5d;
    box-shadow: 0px 0.5px 1px rgba(0.1, 0.2, 0.3, 0.1), 1px 1px 1px 1px rgba(178, 179, 181, 0.5);
    @media (max-width:768px) {
   display: flex;
   flex-flow: column;
   max-width: 768px;
   width: 80vw;
   background-color:red;

  }

    
  }
  .form-items {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start; /* Align form items to the left */
  height: 100vh;
 
}

label {
  width: 14vw; /* Set a fixed width for labels to create symmetry */
  margin-left: 40px; /* Add left margin for spacing */
  margin-right: 20px;
  color:white;
}

input {
  width:12vw; /* Set a fixed width for inputs and textareas */
  padding-left: 15px;
  margin-left: 0; /* Remove left margin for inputs and textareas */
  height: 3vh;
  border:none;
  border-radius: 5px;
}
textarea{
  width: 20vw;
  height: 15vh;
  padding-left: 10px;
  padding-top:5px;
  border:none;
  border-radius: 5px;
}

  .message-label{
    position: relative;
    bottom:45%;
  }

   #greet{
    font-size: 12px;
    font-weight: bold;  
     margin-left:12.5rem;
  }
  #description{
    margin-bottom  :20%;
  }


  button{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: #3D3D3D;
  background: #fff;
  border: none;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:focus {
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
  outline: 0;
}
.contact-us{
  width: 50vw;
  display: flex;
  flex-direction: column;
  @media (max-width:768px) {
   background-color: aqua;;
   display: flex;
   flex-flow: column;
   width: auto;
   h1{
    margin-top:50rem;
   }
  }
  
}
.info{
  display: flex;
  flex-direction: column;
  margin-left:26rem;
}
`