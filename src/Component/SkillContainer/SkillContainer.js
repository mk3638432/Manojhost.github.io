import React from 'react'
import {Element} from 'react-scroll'
import Image from  "../../laptop.jpg"
import LinerProgress from '@mui/material/LinearProgress'
import './SkillContainer.css'
const SkillContainer = () => {
  return (
    <Element id='skills' className='skillContainer'>
        <div className='skillContainer__image'>
        <img src={Image} alt="IMAGE "/>        
     </div>
     <div className='skillContainer__text'>
        <h2>SKILLSET</h2>
        <div className='skillContainer__skillSet'> 
            <h4>REACT</h4>
            <div className='skillContainer__slider skillContainer__slider1'> </div>
            <LinerProgress variant='determinate' value={65}/>
        </div>
        <div className='skillContainer__skillSet'> 
            <h4>JAVASCRIPT</h4>
            <div className='skillContainer__slider skillContainer__slider2'> </div>
            <LinerProgress variant='determinate' value={70}/>
        </div>
        <div className='skillContainer__skillSet'> 
            <h4>REDUX</h4>
            <div className='skillContainer__slider skillContainer__slider3'> </div>
            <LinerProgress variant='determinate' value={50}/>
        </div>
        <div className='skillContainer__skillSet'> 
            <h4>HTML</h4>
            <div className='skillContainer__slider skillContainer__slider3'> </div>
            <LinerProgress variant='determinate' value={90}/>
        </div>
        <div className='skillContainer__skillSet'> 
            <h4>CSS</h4>
            <div className='skillContainer__slider skillContainer__slider3'> </div>
            <LinerProgress variant='determinate' value={80}/>
        </div>
         </div>
    </Element>
  )
}

export default SkillContainer