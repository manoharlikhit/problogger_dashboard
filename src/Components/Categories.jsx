import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <nav className="dropdown">
  <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
  </a>

  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" href="#">Technical</Link></li>
    <li><Link className="dropdown-item" href="#">Non-Technical</Link></li>
    
  </ul>
</nav>
  )
}
