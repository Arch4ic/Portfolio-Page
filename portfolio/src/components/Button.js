import React from 'react'
import '../pages/Page.css'

//basic button component that links to somewhere.
const Button = ({ styling, link, name}) => {
  const handleClick = () => {
    window.open(link)
  }
  return(
    <button className={styling}onClick={handleClick}>{name}</button>
  )
}

export default Button