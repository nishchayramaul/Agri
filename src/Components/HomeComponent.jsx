import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
export const HomeComponent = ({Link}) => {
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

    <Container>
        <div className="inner-container1">
        <div className="row1">
        { data && data.length > 0 && data?.slice(0,1).map((content,index) =>( 
            <Link key={content.id}to={'/article_read1'} >
            <div key={content.id} className="row1_content1">
                <img  style={{ objectFit:'cover',width:'23vw', height:'23vh'}}  src={content.urlToImage} alt="article"/>
                <h1 style={{padding:'20px 0px 5px 20px', fontSize:'22px'}}>{content.title}</h1> 
                </div>
                </Link>
        ))}
            
            { data && data.length > 0 && data?.slice(2,3).map((content,index) =>( 
            <div key= {index}className="row1_content2">
                <img  style={{ objectFit:'cover',width:'23vw', height:'23vh'}}  src={content.urlToImage} alt="article"/>
                <h1 style={{padding:'20px 0px 5px 20px',fontSize:'22px'}}>{content.title}</h1>
                
                </div>
        ))}
        </div>
        <div className="row2">
           
            { data && data.length > 0 && data?.slice(1,2).map((content,index) =>( 
            <div key= {index}className="row2_content1">
                <img  style={{objectFit:'cover',width:'48vw', height:'48vh'}}  src={content.urlToImage} alt="article"/>
                <h1 style={{padding:'20px 0px 5px 20px',fontSize:'40px'}}>{content.title}</h1>
                <p style={{paddingTop:'10px', marginLeft:'20px', color:'#868686'}}>{content.description}</p>
                </div>
            ))}
        </div>
        <div className="row3">  
            <h2 style={{ padding: '10px' }}>HEADING</h2>
            {data && data.length > 0 && data.slice(1, 5).map((content, index) => (
                <div key={index}>
                    <h1 style={{ padding: '20px 0px 5px 20px', fontSize: '18px' }}>{content.title}</h1>
                </div>
            ))}
        </div>
        </div>
        <div className="inner-container2">
            <h3 style={{marginTop:'20px'}}>Heading</h3>
            <div className="inner-child-container">
            {data && data.length > 0 && data.slice(2, 5).map((content, index) => (
                <div key={index} className="inner-container2-child">
                    <img  style={{objectFit:'cover', width:'10vw', height:'14vh'}}  src={content.urlToImage} alt="article"/>
                    <h1 style={{ padding: '20px 0px 5px 20px', fontSize: '12px' , fontWeight:'bold', color:' #423e3e'}}>{content.title}</h1>
                </div>
            ))}
         </div>
        </div>
        <div className="inner-container3">

        </div>
    </Container>
  )
}



const Container = styled.div`
    height: auto;
    display: flex;
    padding:0;
    flex-direction: column;
    .inner-container1{
        display: flex;
        height: 100vh;
        width: 100vw;
        @media (max-width:768px) {
             display: flex;
              flex-direction: column;
              max-width: 768px;
              width: 100%;
              margin: 0 auto;
        }

    }

    .row1, .row3{
    display: flex;
    flex-direction: column;
    width: 25vw;
   
    @media (max-width:768px) {
             display: flex;
             flex-flow: column wrap;
             width:100%;
             max-width: 768px;
             background-color: #3d5151;
        }
}
.row1,.row3{
    justify-content: space-evenly;
    text-align: start;
    white-space: break-spaces;
    flex-wrap: wrap;
    text-overflow: ellipsis;
    @media (max-width:768px) {
             
        }
        

}

.row2{
    display: flex;
    width: 50vw;
    justify-content: center;
    @media (max-width:768px) {
             display: flex;
             max-width: 768px;
             width: 100%;
             background-color: bisque;
        }

}

.row1_content1,.row1_content2{
 
    height: 40vh;
    width: 23vw;
    display: flex;
    margin-left:4%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: break-spaces;
    text-overflow: ellipsis;
}
.row1_content1:hover {
    cursor: pointer;
}
.row2_content1{

    height: 80vh;
    width: 48vw;
    margin-top:10%;
   
    @media (max-width:768px) {
         
             max-width: 760px;
        }

}
.row3>div{
    height: 12vh;
    width: 23vw;
 
   
}

// inner container 2 styling

.inner-container2{
    margin-top: 5%;
    width: 100vw;

    height: 30vh;
    display:flex;
    flex-direction: column;
    background-color:  #f6f6f7;
}
.inner-child-container{
    display: flex;
    
}
.inner-container2-child{
    height: auto;
    width: 25vw;
    margin:40px 40px 20px 50px;
    display: flex;
    align-items: center;
    padding:6px;
}
.inner-container3{
    height: 50vh;
}
`
