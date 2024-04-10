import styled from "styled-components"
import display1 from '../assets/display.jpeg'

export const About = () => {
  return (
    <AboutPage>
    <div className="display1">
     <img  style = {{width:'95vw',height:'100vh',borderRadius:'10px'}}src={display1} alt="picture"/>
    </div>
    <div className="aboutus_info">
      <div>
        <h1>ABOUT US </h1>
        <div className="line"></div>
      </div>
      <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> Facilis repudiandae natus reprehenderit eius.
         Assumenda<br></br> aspernatur et vitae ea, culpa autem, quia expedita, <br></br>alias tempora officia laudantium nobis cumque repellat dolore.
         </p>
         </div>
    </div>
    <div className="display2">

    </div>
 
    </AboutPage>
  )
}


const AboutPage = styled.div `
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f1f1f1;
.display1, .display2{
  height:30vh ;
}
.aboutus_info{
  height: 80vh;
  display: flex;
  width: 100vw;
  gap:1rem;
  justify-content: space-between;
  background-color: #f1f1f1;
  opacity: 1;
}
  h1{
  margin-top:10%;
}
p{
  margin-top:30%;
}
.line{
  border: black 1px solid;
}

`