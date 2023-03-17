import React from 'react'
import "./ExperienceBox.css"
const ExperienceBox = ({number,title , style}) => {
  return (
    <div style={{...style}} className="experience">
        <h1>{title} </h1>
        <p> {number} </p>
    </div>
  )
}

export default ExperienceBox