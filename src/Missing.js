import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Error 404</h2>
      <h3>Page Not Found</h3>
      <p>Well, that's disappointing.</p>
    <Link to="/"> <p>Visit our Home Page</p> </Link>
    </main>
  )
}

export default Missing