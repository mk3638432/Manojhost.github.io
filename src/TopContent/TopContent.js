import React from 'react'
import "./TopContent.css"
import { Link } from 'react-scroll'
const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
        <h1>MANOJ KUMAR.S</h1>
        <p>
          A Prosfional Web Devoloper</p>
      
        <a href='https://docs.google.com/document/d/1uKhkEWKAjC9RaPbCCY1GxummVQ7hXEQHU6djgOsfCOs/edit?usp=drivesdk'> 
            <button className='topContent__downloadButton'>Download CV</button>

        </a>
        <Link to="projects" smooth={true} duration={500}> 
        <button className='topContent__workButton'>My Work</button>
        </Link>   </div>
    </div>
  )
}

export default TopContent