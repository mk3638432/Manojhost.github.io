import React from 'react'
import {Element} from 'react-scroll'
import ExperienceBox from '../../ExperienceBox/ExperienceBox'
import "./Experience.css"
const Experience = () => {
  return (
    <Element id='experience' className='experienceContainer'>
        <h1>Experience </h1>
        <div className='experienceContainer__info'> 
        <ExperienceBox title="MANOJ" number="10"/>
        <ExperienceBox id='manoj' title="MANOJ" number="10"/>
        <ExperienceBox title="MANOJ" number="10"/>
        <ExperienceBox title="MANOJ" number="10"/>
        </div>
    </Element>
  )
}

export default Experience