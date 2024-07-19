import React from 'react'
import { createBrowserRouter ,Outlet,RouterProvider} from 'react-router-dom'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
 
    <div className='nav'>
        <Link to="/"><h4>home</h4></Link>
        <Link to="/About"><h4>about</h4></Link>
        <Link to="/Contact"><h4>contact</h4></Link>
        <Link to="/Login"><h4>login</h4></Link>
        <Outlet />
    </div>
  )
}

export default Navbar