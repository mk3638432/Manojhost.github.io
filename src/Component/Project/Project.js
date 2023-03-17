import React, { useState } from 'react'
import './Project.css'
const Project = ({image , title, desc ,link}) => {
    const [show , setShow] = useState(false)
  return (
    <a href={link}>
      <div className="project"
       onMouseEnter={() => {setShow(true)}} 
       onMouseLeave={() => {setShow(false)}}> 
    
      {
        show ? (
        <div className='project__content'>
             <h3>{title} </h3>
              <p> {desc}</p> 
            </div>
             ) :( <img src={image} alt="" />)
      } 
       </div> 
    </a>
   
  )
}

export default Project