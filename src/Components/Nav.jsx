import React from 'react'
import {
  Routes,
  Link,
  Route 
  } from "react-router-dom";
export default function Nav() {
  return (
    <div className='nav'>
    <nav className=" nav navbar navbar-expand-lg ">
    <div className="container-md">
    <Link to="/"><a className="navbar-brand" href="#">Dashboard</a></Link> 
    </div>
    </nav>
    </div>
  )
}
