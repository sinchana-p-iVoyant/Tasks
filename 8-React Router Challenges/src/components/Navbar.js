import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/contactUs'>Contact Us</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/profile/:name'>Profile</NavLink>
    </nav>
  )
}

// export default Navbar
