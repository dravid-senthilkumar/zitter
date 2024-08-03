import React from 'react'

const Footer = () => {
  var year = new Date();
  return (
  <div className='Footer'>Copyrights <>&copy;</> {year.getFullYear()} </div> 
  )
}

export default Footer;