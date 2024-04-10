
import './App.css'
import {Routes,Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Publication } from './Components/Publication';
import { Contact } from './Components/Contact';
import {About} from './Components/About'
import { Article1 } from './Components/Pages/Article1';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

function App() {

      const [data,setData] = useState([]);
      const[error,setError] = useState();
      console.log(error)
      console.log(data);
      useEffect(()=>{
          
          const fetchdata = async () =>{
           
              try {
               
               const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4f910fbca5fc4c719a2548618fa90080');
               const json = await response.json() ;
               setData(json.articles);
  
              } catch (error) {
               setError("Error Loading data")
              }
           
            } 
            fetchdata();
          
      },[])
  return (
      <Routes>
      <Route path='*' element ={<h1>404 Not Found</h1>}/>
      <Route path='/' element ={<Home />}/>
      <Route path = '/publication_fees' element ={<Publication />}/>
      <Route path='/about_us' element = {<About />}/>
      <Route path='/contact_us' element ={<Contact />}/>
      <Route path='/article_read1' element = {<Article1 data={data}/>}/>
    </Routes>
    
  );
}

export default App
