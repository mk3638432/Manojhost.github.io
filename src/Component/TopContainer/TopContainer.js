import React from 'react'
import "./TopContainer.css"
import TopContent from '../../TopContent/TopContent'
import { Element } from 'react-scroll'
const TopContainer = () => {
  return (
    <Element name="about" className="topContainer" >
        <TopContent/>
    </Element>
  )
}

export default TopContainer