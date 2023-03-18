import React, {useState} from 'react'
import {Link} from 'react-scroll'
import './Header.css'
import {FiMenu , FiX} from 'react-icons/fi'

const Header = () => {
  const [open , setOpen] = useState(false)
  const handleClick = () => {setOpen(!open)}
  const closeMenu = () => {setOpen(false)}
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>DEVOLO<span>PER</span></h1>
        </div>

        <div onClick={handleClick} className='nav__icon'> 
        {open ?  <FiX/> : <FiMenu/>}
       
        
        </div>
        <div className={ open ?'header__right active' :  'header__right' }>
         <Link onClick={closeMenu} to='about' smooth={true} duration={500} > 
         <h4>About Me</h4>
         </Link>
         <Link onClick={closeMenu} to='skills' smooth={true} duration={500} > 
         <h4>Skills</h4>
         </Link>
         <Link onClick={closeMenu} to='project' smooth={true} duration={500} > 
         <h4>Project</h4>
         </Link>
         <Link onClick={closeMenu} to='experience' smooth={true} duration={500} > 
         <h4>Exprience</h4>
         </Link>
         <Link onClick={closeMenu} to='contact' smooth={true} duration={500} > 
         <h4>Contact</h4>
         </Link>
         {/* <h4 className='header__rightButton'>Join with MA</h4> */}
        </div>
        
    </div>
  )
}

export default Header