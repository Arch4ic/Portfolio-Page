import React from 'react'
import './Page.css'
import me from '../images/me2.jpeg'
import Skills from '../components/skills'

// about me page
const About = () => {
  return(
    <div className='aboutPage'>
        <h2>ABOUT</h2>
        <div className='aboutContainer'>
          <img className='picture' src ={me} alt='me' />
          <div>
            <p className='pabout'>Who am I?</p>
            <p className='pabout2'>I am <span style={{color: '#04AA6D'}}>Emil Mustonen</span> from Finland and I study Information and Communications technology (engineering) at Turku University of Applied Sciences, My goal is to become a full-stack developer. I have mainly worked with React and JS. I have a passion for learning new things related to technology and this website is a good example of that </p>
            <Skills></Skills>
          </div>
        </div>
      </div>
  )
}
export default About