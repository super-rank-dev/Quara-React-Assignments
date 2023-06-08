import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className='head'>
        <div className='home'>
            <NavLink className='link' to='/'>Home</NavLink>
        </div>
        <div className='contact'>
            <NavLink className='link' to='/contact'>Contact</NavLink>
        </div>
        <div className='about'>
            <NavLink className='link' to='/about'>About</NavLink>
        </div>
    </div>
  )
}

export default Header;