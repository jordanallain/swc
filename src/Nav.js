import {Link} from 'react-router-dom'
import React from 'react'
import './Nav.css'

const Nav = () => (
  <div className='nav-container'>
    <Link className='nav-link' to='/'>Home</Link>
    <Link className='nav-link' to='/planets'>Planets</Link>
  </div>
)

export default Nav
