import React from 'react'
import './ProjectContainer.css'
import {Element} from 'react-scroll'
import Project from '../Project/Project'
const ProjectContainer = () => {
    const project = [
        {
            img : "https://tse2.mm.bing.net/th?id=OIP.40jzVnMmXmt3OSe9ZmCpiQHaEK&pid=Api&P=0",
            title : "FACEBOOK",
            dec : "For how-to quesack wowemde",
            link : "www.google.com"
        },
        {
            img : "https://tse2.mm.bing.net/th?id=OIP.40jzVnMmXmt3OSe9ZmCpiQHaEK&pid=Api&P=0",
            title : "FACEBOOK",
            dec : "For how-t use Stack wowmde",
            link : "www.google.com"
        },
        {
            img : "https://tse2.mm.bing.net/th?id=OIP.40jzVnMmXmt3OSe9ZmCpiQHaEK&pid=Api&P=0",
            title : "FACEBOOK",
            dec : "For how-to questiode",
            link : "www.google.com"
        },
        {
            img : "https://tse2.mm.bing.net/th?id=OIP.40jzVnMmXmt3OSe9ZmCpiQHaEK&pid=Api&P=0",
            title : "FACEBOOK",
            dec : "For how-to questions thmde",
            link : "www.google.com"
        },
        {
            img : "https://tse2.mm.bing.net/th?id=OIP.40jzVnMmXmt3OSe9ZmCpiQHaEK&pid=Api&P=0",
            title : "FACEBOOK",
            dec : "For how-to queswowemde",
            link : "www.google.com"
        },
    ]
  return (
    <Element id="project" className="projectContainer">
        <h1>PROJECT </h1>
        <div className='projectContainer__project'>
       {
        project.map((ele , id ) => {
            return(
                <Project
                 key={id} 
                 image={ele.img}                 
                 title={ele.title} 
                 desc={ele.dec}
                  link={ele.link}/>  
           
            )
        })
       }
        </div>
    </Element>
  )
}

export default ProjectContainer