import React from 'react'

const Footer = () => {
  var year = new Date();
  return (
  <footer className='Footer'>Copyrights <>&copy;</> {year.getFullYear()} </footer> 
  )
}

export default Footer