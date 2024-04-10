import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../assets/wall.jpeg'
import { motion } from "framer-motion"
import { Burger } from './Burger';
import { useEffect, useState } from 'react';
import { HomeComponent } from './HomeComponent';

export const Home = () => {
  const burger_items = [
    {
      title:'ADVERTISE WITH US'
    },
    {
      title:'ABOUT OUR FOUNDER'
    },
    {
      title: ' AIM OF MAGAZINE'
    },
    {
      title: 'TEMPLATE'
    }
  ]
  const navlinks = [
    {
      title: 'HOME',
      path: '/',
    },
    {
      title: 'ABOUT US',
      path: '/about_us',
    },
    {
      title: 'SUBMISSION PROCESS',
      path: '/submission_process',
    },
    {
      title: 'EDITORIAL BOARD',
      path: '/editorial_board',
    },
    {
      title: 'PUBLICATION FEES',
      path: '/publication_fees',
    },
    {
      title: 'CONTACT US',
      path: '/contact_us',
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [burgerMenu, setBurgerMenu] = useState(false);

  // Animation

  const variants = {
    visible : {
       opacity : 1,
       y:3,
       scale:1,
       transition : {duration:1, staggerChildren:0.2}
    },
    hidden : {
      opacity : 0
    }
  }
  useEffect(() => {
    // Update burgerMenu state based on window width
    setBurgerMenu(windowWidth <= 768);
  }, [windowWidth]);  
  return (<HomePage>
  
    {burgerMenu ? (
      <div className="responsive-navbar">
        <div className="responsive-burger">
          <Burger navlinks={navlinks} variants ={variants}/>
        </div>     
          <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1, x: 40 }}
          transition={{ duration: 1 }}
          className="logo"
        >
          LOGO
        </motion.div>
      </div>
     
    ) : (
      // Navbar code
      <NavBar>
        <div className="nav-burger-menu">
          <Burger navlinks={ burger_items} variants={variants}/>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1, x: 40 }}
          transition={{ duration: 0.5}}
          className="logo"
        >
          LOGO
        </motion.div>
    
        <motion.ul initial="hidden" animate="visible" variants={variants}>
          {navlinks.map((link, index) => (
            <motion.li key={index} variants={variants}>
              <Link id="app_links" to={link.path}>
                {link.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </NavBar>
    )}
    
      { /*
      <div className="wallpaper">
    <h1 style={{fontSize:'80px',textAlign:'center'}}>AGRICULTURE<br></br> NEWSLETTER <br></br> AND <br></br>MAGAZINE</h1>
        <img src={img} alt='wallpaper' style={{height:'88vh',width:'100vw'}}/>    
      </div>
      */}
   
      <HomeComponent Link={Link}/>
      </HomePage>
  );
};


const HomePage = styled.div`
  height: auto;
`
const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  border-bottom:solid .1px  #e6e6e6;
box-shadow:  1px 1px 1px #e6e6e6,
            -1px -1px 1px #f0f0f0;
  ul {
    list-style: none;
    display: flex;
    gap: 60px;
    font-size: 16px;
  }
  color: #000101;



  #app_links{ 
    text-decoration: none;
    list-style: none;
    color: #000101;
    &:hover{
      color: #9f9f9f;
    }
    
  
  }
`;