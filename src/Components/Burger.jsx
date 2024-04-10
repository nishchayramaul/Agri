import { useState } from "react"
import { styled } from 'styled-components';
import '../App.css';
import { motion } from "framer-motion"
import 'animate.css';

export const Burger = ({navlinks,variants}) => {

const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
const[menu_class, setMenuClass]  = useState("menu hidden");
const[isMenuClicked,setIsMenuClicked] = useState(false);

 const updateMenu = () =>{
    if(!isMenuClicked){
        setBurgerClass("burger-bar clicked");
        setMenuClass("menu visible");
    }
    else{
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
 }


  return (
    <div>
    <div className="burger-menu" onClick={updateMenu}>
        <div className ={burger_class} ></div>
        <div className={burger_class} ></div>
        <div className={burger_class} ></div>

    </div>
    <motion.div className={`${menu_class} animate__animated animate__slideInLeft`} initial="hidden" animate="visible" variants={variants}>
        {
            navlinks.map((item,index)=>(
              <motion.div
              key = {index } 
              variants={variants} 
              className="menu-items"> <Button>{item.title}</Button>  </motion.div> 
            ))
        }
    </motion.div>

    </div>
  )
}

const Button = styled.button `
  color: #000000;
  text-decoration: none;
  font-size: 18px;
  border: none;
  background: none;
  font-weight: 600;
  text-align: left; 

&::before {
  margin-left: auto;
}

&:after, &::before {
  content: '';
  width: 0%;
  height: 2px;
  background: #8a8888;
  display: block;
  transition: 0.5s;
}

&:hover::after, &:hover::before {
  width: 100%;
}


`