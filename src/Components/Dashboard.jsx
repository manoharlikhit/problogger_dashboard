import React from 'react'
import { useState } from 'react';
import './Dashboard.css';
import Buttons from './Buttons';
import Card from './Card';
import Recent from './Recent';
import Menu from './Menu';
import Blog from './Blog';


import {
Routes,
Link,
Route 
} from "react-router-dom";
import Nav from './Nav';
import CreatePage from './CreatePage';



export default function Dashboard() {

  const [myPages, setMyPages] = useState(true);

  const handleCallback = (option) =>{
    console.log(myPages);
    setMyPages(option);
  }

  const FeaturesData=[
    {
      title:"Improving end distrusts instantly ",
      desc:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
      title:"Become the tended active",
      desc:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
      title:"Message or am nothing",
      desc:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
      title:"Really boy law county",
      desc:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    }
  ]
  

  const pages = [
    {
      url: "./images/Angular.png",
      pagename: "Angular",
      text: "some text about Angular pages",
      followers: "240",
      pageid: 11
    },
    {
      url: "./images/JavaScript.png",
      pagename: "JavaScript",
      text: "some text about Javascript pages",
      followers: "240",
      pageid: 12
    },
    {
      url: "./images/Node.png",
      pagename: "Node.js",
      text: "some text about Node pages",
      followers: "240",
      pageid: 13
    }
  ]
  
  const followedpages = [
    {
      url: "./images/Node.png",
      pagename: "Node.js",
      text: "some text about Node pages",
      followers: "240",
      pageid: 1
    },
    {
      url: "./images/Angular.png",
      pagename: "Angular",
      text: "some text about Angular pages",
      followers: "240",
      pageid: 2
    },
    {
      url: "./images/JavaScript.png",
      pagename: "JavaScript",
      text: "some text about Javascript pages",
      followers: "240",
      pageid: 3
    },
    {
      url: "./images/Angular.png",
      pagename: "Angular",
      text: "some text about Angular pages",
      followers: "240",
      pageid: 4
    },
    {
      url: "./images/Node.png",
      pagename: "Node.js",
      text: "some text about Node pages",
      followers: "240",
      pageid: 5
    },
    {
      url: "./images/React-icon.png",
      pagename: "React.js",
      text: "some text about React pages",
      followers: "240",
      pageid: 6
    }
  ]
  

const Main = () => <div className="grid-item main"> 
    <div style={{margin:'1rem'}}>
        <Buttons callback={handleCallback}/>
        {myPages && 
        <Link to='/createpage'><button className='btn btn-primary' style={{float:'right'}}>Create new page</button></Link>}
        
    </div>

    <div className='PageCards'>

        {myPages && pages.map((i)=>{
          return <Card key={i.pageid} url={i.url} pagename={i.pagename} text={i.text} followers={i.followers} blogid={i.pageid}></Card>
        })}

        {
          !myPages && followedpages.map((i)=>{
            return <Card key={i.pageid} url={i.url} pagename={i.pagename} text={i.text} followers={i.followers} blogid={i.pageid}></Card>
          })
        }
        
        </div>       
    </div>
  
  return (
    <div className='grid-container'>
    
    <Menu></Menu>
    
    <Nav />
    
    <Routes>

      <Route path='/' element={<Main />} />
      <Route path='/createpage' element={<CreatePage />} />
      <Route path='/Angular' element={<Main />} />
      <Route path="/blog/:blogid" element={<Blog />} />
    </Routes>

  
            

      <div className="grid-item"><Recent /></div>
          
    </div>
  )
}

         
          

          
    // <Nav title={title}/>