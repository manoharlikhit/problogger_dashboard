import React from 'react'
import { useState } from 'react';
import './Dashboard.css';
import Buttons from './Buttons';
import Card from './Card';
import Recent from './Recent';
import Menu from './Menu';

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


  const pages = [{url:"./images/Angular.png",pagename:"Angular",text:"some text about Angular pages",followers:"240"},
  {url:"./images/JavaScript.png",pagename:"JavaScript",text:"some text about Javascript pages",followers:"240"},
  {url:"./images/Node.png",pagename:"Node.js",text:"some text about Node pages",followers:"240"}
  ]
  const followedpages = [ {url:"./images/Node.png",pagename:"Node.js",text:"some text about Node pages",followers:"240"}, 
  {url:"./images/Angular.png",pagename:"Angular",text:"some text about Angular pages",followers:"240"},
  {url:"./images/JavaScript.png",pagename:"JavaScript",text:"some text about Javascript pages",followers:"240"},{url:"./images/Angular.png",pagename:"Angular",text:"some text about Angular pages",followers:"240"},
  {url:"./images/Node.png",pagename:"Node.js",text:"some text about Node pages",followers:"240"},
  {url:"./images/React-icon.png",pagename:"React.js",text:"some text about React pages",followers:"240"},
  ]
  
  
const Main = () => <div className="grid-item main"> 
    <div style={{margin:'1rem'}}>
        <Buttons callback={handleCallback}/>
        {myPages && 
        <Link to='/createpage'><button className='btn btn-primary' style={{float:'right'}}>Create new page</button></Link>}
        
    </div>

    <div className='PageCards'>

        {myPages && pages.map((i)=>{
          return <Card key={i.url} url={i.url} pagename={i.pagename} text={i.text} followers={i.followers}></Card>
        })}

        {
          !myPages && followedpages.map((i)=>{
            return <Card key={i.url} url={i.url} pagename={i.pagename} text={i.text} followers={i.followers}></Card>
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
    
    </Routes>

  
            

      <div className="grid-item"><Recent /></div>
          
    </div>
  )
}

         
          

          
    // <Nav title={title}/>