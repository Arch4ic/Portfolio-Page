import React from 'react'
import './Page.css'
import me from '../images/me2.jpeg'
import Skills from '../components/skills'

const About = () => {
  return(
    <div className='aboutPage'>
        <h3 style={{color: 'white', fontSize: '40px', marginBottom: '50px'}}>ABOUT</h3>
        <div className='aboutContainer'>
        <img className='picture' src ={me} alt='blankimg' />
        <div className='pContainer'>
          <p style={{color: 'white', fontSize: '30px', marginBottom: '5px'}}>Who am I?</p>
          <p style={{color: 'white', fontSize: '20px', marginBottom: '25px'}}>I am <span style={{color: '#04AA6D'}}>Emil Mustonen</span> from Finland and I study ICT at Turku University of Applied Sciences, My goal is to become a full-stack developer. I work mostly with React and JS </p>
          <Skills></Skills>
        </div>
        </div>
      </div>
  )
}
export default About