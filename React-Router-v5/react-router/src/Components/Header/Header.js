import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Header() {
  return (
    <div className='head'>
        <div className='home'>
            <Link className='link' to='/'>Home</Link>
        </div>
        <div className='contact'>
        <   Link className='link' to='/contact'>Contact</Link>
        </div>
        <div className='about'>
            <Link className='link' to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Header;