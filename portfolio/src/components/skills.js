import React from 'react'
import './skills.css'
 /* skill bars */
const Skills = () => {
  return(
    <div>
      <p className='pskills'>REACT</p>
      <div className='containers'>
        <div className='skills react'>55%</div>
      </div>
      <p className='pskills'>JS</p>
      <div className='containers'>
        <div className='skills js'>30%</div>
      </div>
      <p className='pskills'>CSS</p>
      <div className='containers'>
        <div className='skills css'>10%</div>
      </div>
      <p className='pskills'>Other</p>
      <div className='containers'>
        <div className='skills other'>5%</div>
      </div>
    </div>
  )
}

export default Skills