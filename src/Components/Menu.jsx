import React from 'react'
import "./Menu.css"
import Categories from './Categories'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard';


export default function Menu() {
  return (
    <div className="grid-item menu ">
    <div className='menuitems'>
    <h1>ProBlogger</h1>
      <div><a href='\'>Dashboard</a></div>
      <div><a><Categories /></a></div>
      <div><a href='#'>Analytics</a></div>
      <div><a href='#'>Reports</a></div>
      
      <div><Link to='/createpage'>New Page</Link></div>
      <div><a href='#'>Settings</a></div>
      </div>
      
  </div>
  )
}
