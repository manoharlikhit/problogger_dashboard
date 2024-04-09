/* eslint-disable react/prop-types */
import React from 'react'
// ./images/Angular.png
export default function Card(props) {
  return (
    <div className="card" >
    <a href='#'>
    <img src={props.url} className="card-img-top" alt="..." style={{height:'1054',width:'1054',border:"1px solid black",position:'relative'}}/>
    <div className="card-body" style={{border:'1px solid black'}}>
    <h4>{props.pagename }</h4>
    <p className="card-text">{props.text}</p>
    <span><b>followers:</b>{props.followers}</span>
    </div>
    </a>
            </div>
  )
}
