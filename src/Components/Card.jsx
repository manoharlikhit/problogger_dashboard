/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom';
import Blog from './Blog';
import { useNavigate } from 'react-router-dom';
export default function Card(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${props.blogid}`);
  }
  return (
    // <Link to={`/blog/${props.blogid}`}>
      <div className="card" onClick={handleClick}>
        <img src={props.url} className="card-img-top" alt="..." style={{height:'1054',width:'1054',border:"1px solid black",position:'relative'}}/>
        <div className="card-body" style={{border:'1px solid black'}}>
          <h4>{props.pagename }</h4>
          <p className="card-text">{props.text}</p>
          <span><b>followers:</b>{props.followers}</span>
        </div>
      </div>
    // </Link>
  )
}
