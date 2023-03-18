import React from 'react'
import {Element} from 'react-scroll'
import "./ContactBox.css"
// import {IconButton} from "@mui/material"
// import {Facebook , Instagram , LinkeIn} from "@mui/material"
const ContactBox = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>mk3638432@gmail.com</span>
            </p>
            <p> 
                Mobile: <span> 8668382744 </span>
            </p>
            {/* <div className='conact__icon'>
             <a href='#' > */}
             {/* <IconButton>
              <Facebook/>
             </IconButton>
             </a>
             <a href='#' >
             <IconButton>   
              <Instagram/>
             </IconButton>
             </a>
             <a href='#' >
             <IconButton>
              <LinkeIn/>
             </IconButton> */}
             {/* </a>
            </div> */}
        </div>
    </Element>
  )
}

export default ContactBox