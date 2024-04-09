/* eslint-disable react/prop-types */
import React from 'react'
import {useState} from 'react'

export default function Buttons({callback}) {

  const handleChange = (e) => {
    console.log(e.target.value);
    callback(e.target.value=='true' ? true : false);
  };


  return (
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="btnradio" value='true' id="btnradio1" autoComplete="off" defaultChecked onChange={handleChange}/>
                  <label className="btn btn-outline-primary" htmlFor="btnradio1">My Pages</label>

                  <input type="radio" className="btn-check" name="btnradio" value='false' id="btnradio2" autoComplete="off" onChange={handleChange} />
                  <label className="btn btn-outline-primary" htmlFor="btnradio2">Followed Pages</label>
              </div>
  )
}
