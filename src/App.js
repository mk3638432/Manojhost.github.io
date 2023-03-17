import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Experience from './Component/Experience/Experience'
import TopContainer from './Component/TopContainer/TopContainer'
import SkillContainer from './Component/SkillContainer/SkillContainer'
import ProjectContainer from './Component/ProjectContainer/ProjectContainer'
import ContactBox from './Component/ContactBox/ContactBox'
const App = () => {
  return (
    <div>
        <Header/>
        <TopContainer/>
        <SkillContainer/>
        <ProjectContainer/>
        <Experience/>
        <ContactBox/>

    </div>
  )
}

export default App